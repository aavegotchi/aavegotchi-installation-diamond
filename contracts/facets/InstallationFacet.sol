// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import {ERC998, ItemTypeIO} from "../libraries/LibERC998.sol";
import {LibAppStorage, Installation, InstallationQueue, Modifiers} from "../libraries/AppStorage.sol";
import {LibStrings} from "../libraries/LibStrings.sol";
import {LibMeta} from "../libraries/LibMeta.sol";
import {LibERC1155} from "../libraries/LibERC1155.sol";
import {LibERC20} from "../libraries/LibERC20.sol";

contract InstallationFacet is Modifiers {
  //using LibAppStorage for AppStorage;

  event TransferToParent(address indexed _toContract, uint256 indexed _toTokenId, uint256 indexed _tokenTypeId, uint256 _value);

  // event EquipWearables(uint256 indexed _tokenId, uint16[EQUIPPED_WEARABLE_SLOTS] _oldWearables, uint16[EQUIPPED_WEARABLE_SLOTS] _newWearables);
  event UseConsumables(uint256 indexed _tokenId, uint256[] _itemIds, uint256[] _quantities);

  /***********************************|
   |             Read Functions         |
   |__________________________________*/

  struct ItemIdIO {
    uint256 itemId;
    uint256 balance;
  }

  ///@notice Returns balance for each item that exists for an account
  ///@param _account Address of the account to query
  ///@return bals_ An array of structs,each struct containing details about each item owned
  function itemBalances(address _account) external view returns (ItemIdIO[] memory bals_) {
    uint256 count = s.ownerItems[_account].length;
    bals_ = new ItemIdIO[](count);
    for (uint256 i; i < count; i++) {
      uint256 itemId = s.ownerItems[_account][i];
      bals_[i].balance = s.ownerItemBalances[_account][itemId];
      bals_[i].itemId = itemId;
    }
  }

  ///@notice Returns balance for each item(and their types) that exists for an account
  ///@param _owner Address of the account to query
  ///@return output_ An array of structs containing details about each item owned(including the item types)
  function itemBalancesWithTypes(address _owner) external view returns (ItemTypeIO[] memory output_) {
    uint256 count = s.ownerItems[_owner].length;
    output_ = new ItemTypeIO[](count);
    for (uint256 i; i < count; i++) {
      uint256 itemId = s.ownerItems[_owner][i];
      output_[i].balance = s.ownerItemBalances[_owner][itemId];
      output_[i].itemId = itemId;
      output_[i].installationType = s.installationTypes[itemId];
    }
  }

  /**
        @notice Get the balance of an account's tokens.
        @param _owner  The address of the token holder
        @param _id     ID of the token
        @return bal_    The _owner's balance of the token type requested
     */
  function balanceOf(address _owner, uint256 _id) external view returns (uint256 bal_) {
    bal_ = s.ownerItemBalances[_owner][_id];
  }

  /// @notice Get the balance of a non-fungible parent token
  /// @param _tokenContract The contract tracking the parent token
  /// @param _tokenId The ID of the parent token
  /// @param _id     ID of the token
  /// @return value The balance of the token
  function balanceOfToken(
    address _tokenContract,
    uint256 _tokenId,
    uint256 _id
  ) external view returns (uint256 value) {
    value = s.nftItemBalances[_tokenContract][_tokenId][_id];
  }

  ///@notice Returns the balances for all ERC1155 items for a ERC721 token
  ///@dev Only valid for claimed aavegotchis
  ///@param _tokenContract Contract address for the token to query
  ///@param _tokenId Identifier of the token to query
  ///@return bals_ An array of structs containing details about each item owned
  function itemBalancesOfToken(address _tokenContract, uint256 _tokenId) external view returns (ItemIdIO[] memory bals_) {
    uint256 count = s.nftItems[_tokenContract][_tokenId].length;
    bals_ = new ItemIdIO[](count);
    for (uint256 i; i < count; i++) {
      uint256 itemId = s.nftItems[_tokenContract][_tokenId][i];
      bals_[i].itemId = itemId;
      bals_[i].balance = s.nftItemBalances[_tokenContract][_tokenId][itemId];
    }
  }

  ///@notice Returns the balances for all ERC1155 items for a ERC721 token
  ///@dev Only valid for claimed aavegotchis
  ///@param _tokenContract Contract address for the token to query
  ///@param _tokenId Identifier of the token to query
  ///@return itemBalancesOfTokenWithTypes_ An array of structs containing details about each item owned(including the types)
  function itemBalancesOfTokenWithTypes(address _tokenContract, uint256 _tokenId)
    external
    view
    returns (ItemTypeIO[] memory itemBalancesOfTokenWithTypes_)
  {
    itemBalancesOfTokenWithTypes_ = ERC998.itemBalancesOfTokenWithTypes(_tokenContract, _tokenId);
  }

  /**
        @notice Get the balance of multiple account/token pairs
        @param _owners The addresses of the token holders
        @param _ids    ID of the tokens
        @return bals   The _owner's balance of the token types requested (i.e. balance for each (owner, id) pair)
     */
  function balanceOfBatch(address[] calldata _owners, uint256[] calldata _ids) external view returns (uint256[] memory bals) {
    require(_owners.length == _ids.length, "InstallationFacet: _owners length not same as _ids length");
    bals = new uint256[](_owners.length);
    for (uint256 i; i < _owners.length; i++) {
      uint256 id = _ids[i];
      address owner = _owners[i];
      bals[i] = s.ownerItemBalances[owner][id];
    }
  }

  ///@notice Query the current wearables equipped for an NFT
  ///@dev only valid for claimed aavegotchis
  ///@param _tokenId Identifier of the NFT to query
  ///@return wearableIds_ An array containing the Identifiers of the wearable items currently equipped for the NFT
  /* function equippedWearables(uint256 _tokenId) external view returns (uint16[EQUIPPED_WEARABLE_SLOTS] memory wearableIds_) {
    wearableIds_ = s.aavegotchis[_tokenId].equippedWearables;
  }

*/

  ///@notice Query the item type of a particular item
  ///@param _itemId Item to query
  ///@return installationType A struct containing details about the item type of an item with identifier `_itemId`
  function getInstallationType(uint256 _itemId) external view returns (Installation memory installationType) {
    require(_itemId < s.installationTypes.length, "InstallationFacet: Item type doesn't exist");
    installationType = s.installationTypes[_itemId];
  }

  ///@notice Query the item type of multiple  items
  ///@param _itemIds An array containing the identifiers of items to query
  ///@return itemTypes_ An array of structs,each struct containing details about the item type of the corresponding item
  function getInstallationTypes(uint256[] calldata _itemIds) external view returns (Installation[] memory itemTypes_) {
    if (_itemIds.length == 0) {
      itemTypes_ = s.installationTypes;
    } else {
      itemTypes_ = new Installation[](_itemIds.length);
      for (uint256 i; i < _itemIds.length; i++) {
        itemTypes_[i] = s.installationTypes[_itemIds[i]];
      }
    }
  }

  /**
        @notice Get the URI for a voucher type
        @return URI for token type
    */
  function uri(uint256 _id) external view returns (string memory) {
    require(_id < s.installationTypes.length, "InstallationFacet: Item _id not found");
    return LibStrings.strWithUint(s.baseUri, _id);
  }

  /***********************************|
   |             Write Functions        |
   |__________________________________*/

  /**
        @notice Set the base url for all voucher types
        @param _value The new base url        
    */
  function setBaseURI(string memory _value) external onlyOwner {
    s.baseUri = _value;
    for (uint256 i; i < s.installationTypes.length; i++) {
      emit LibERC1155.URI(LibStrings.strWithUint(_value, i), i);
    }
  }

  function craftInstallations(uint256[] calldata _installationTypes) external {
    for (uint8 i = 0; i < _installationTypes.length; i++) {
      //take the required alchemica
      for (uint8 j = 0; j < s.installationTypes[i].alchemicaCost.length; i++) {
        LibERC20.transferFrom(s.alchemicaAddresses[j], msg.sender, address(this), s.installationTypes[i].alchemicaCost[j]);
      }
      //put the installation into a queue
      s.installationQueue[msg.sender][s.queuesIds[msg.sender]] = InstallationQueue(msg.sender, block.number, i);
      //each wearable needs a unique queue id
      s.queuesIds[msg.sender]++;
    }
    //after queue is over, user can claim installation
  }

  function claimInstallation(uint256 _queueId) external {
    require(msg.sender == s.installationQueue[msg.sender][_queueId].owner);
    uint256 readyBlock = s.installationQueue[msg.sender][_queueId].startBlock +
      s.installationTypes[s.installationQueue[msg.sender][_queueId].installationType].craftTime;
    require(block.timestamp >= readyBlock, "InstallationFacet: installation not ready");
    // mint installation
  }

  /***********************************|
   |             Owner Functions        |
   |__________________________________*/

  function addInstallationTypes(Installation[] calldata _installationTypes) external onlyOwner {
    for (uint16 i = 0; i < _installationTypes.length; i++) {
      s.installationTypes.push(
        Installation(
          _installationTypes[i].installationType,
          _installationTypes[i].level,
          _installationTypes[i].width,
          _installationTypes[i].height,
          _installationTypes[i].alchemicaType,
          _installationTypes[i].alchemicaCost,
          _installationTypes[i].craftTime
        )
      );
    }
  }

  function updateInstallationType(Installation memory _updatedInstallation) external onlyOwner {}
}
