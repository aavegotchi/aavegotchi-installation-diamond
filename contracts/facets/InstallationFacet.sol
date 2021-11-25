// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import {ERC998, ItemTypeIO} from "../libraries/LibERC998.sol";
import {LibAppStorage, InstallationType, QueueItem, Modifiers} from "../libraries/AppStorage.sol";
import {LibStrings} from "../libraries/LibStrings.sol";
import {LibMeta} from "../libraries/LibMeta.sol";
import {LibERC1155} from "../libraries/LibERC1155.sol";
import {ERC998} from "../libraries/LibERC998.sol";
import {LibERC20} from "../libraries/LibERC20.sol";
import {IERC721} from "../interfaces/IERC721.sol";

contract InstallationFacet is Modifiers {
  event TransferToParent(address indexed _toContract, uint256 indexed _toTokenId, uint256 indexed _tokenTypeId, uint256 _value);

  event AddedToQueue(uint256 indexed _queueId, uint256 indexed _installationType, uint256 _readyBlock, address _sender);

  event QueueClaimed(uint256 indexed _queueId);
  event CraftTimeReduced(uint256 indexed _queueId, uint256 _blocks);

  /***********************************|
   |             Read Functions         |
   |__________________________________*/

  struct InstallationIdIO {
    uint256 installationId;
    uint256 balance;
  }

  ///@notice Returns balance for each installation that exists for an account
  ///@param _account Address of the account to query
  ///@return bals_ An array of structs,each struct containing details about each installation owned
  function installationsBalances(address _account) external view returns (InstallationIdIO[] memory bals_) {
    uint256 count = s.ownerInstallations[_account].length;
    bals_ = new InstallationIdIO[](count);
    for (uint256 i; i < count; i++) {
      uint256 installationId = s.ownerInstallations[_account][i];
      bals_[i].balance = s.ownerInstallationBalances[_account][installationId];
      bals_[i].installationId = installationId;
    }
  }

  ///@notice Returns balance for each installation(and their types) that exists for an account
  ///@param _owner Address of the account to query
  ///@return output_ An array of structs containing details about each installation owned(including the installation types)
  function installationsBalancesWithTypes(address _owner) external view returns (ItemTypeIO[] memory output_) {
    uint256 count = s.ownerInstallations[_owner].length;
    output_ = new ItemTypeIO[](count);
    for (uint256 i; i < count; i++) {
      uint256 installationId = s.ownerInstallations[_owner][i];
      output_[i].balance = s.ownerInstallationBalances[_owner][installationId];
      output_[i].itemId = installationId;
      output_[i].installationType = s.installationTypes[installationId];
    }
  }

  /**
        @notice Get the balance of an account's tokens.
        @param _owner  The address of the token holder
        @param _id     ID of the token
        @return bal_    The _owner's balance of the token type requested
     */
  function balanceOf(address _owner, uint256 _id) external view returns (uint256 bal_) {
    bal_ = s.ownerInstallationBalances[_owner][_id];
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
    value = s.nftInstallationBalances[_tokenContract][_tokenId][_id];
  }

  ///@notice Returns the balances for all ERC1155 items for a ERC721 token
  ///@param _tokenContract Contract address for the token to query
  ///@param _tokenId Identifier of the token to query
  ///@return bals_ An array of structs containing details about each item owned
  function installationBalancesOfToken(address _tokenContract, uint256 _tokenId) external view returns (InstallationIdIO[] memory bals_) {
    uint256 count = s.nftInstallations[_tokenContract][_tokenId].length;
    bals_ = new InstallationIdIO[](count);
    for (uint256 i; i < count; i++) {
      uint256 installationId = s.nftInstallations[_tokenContract][_tokenId][i];
      bals_[i].installationId = installationId;
      bals_[i].balance = s.nftInstallationBalances[_tokenContract][_tokenId][installationId];
    }
  }

  ///@notice Returns the balances for all ERC1155 items for a ERC721 token
  ///@param _tokenContract Contract address for the token to query
  ///@param _tokenId Identifier of the token to query
  ///@return installationBalancesOfTokenWithTypes_ An array of structs containing details about each installation owned(including installation types)
  function installationBalancesOfTokenWithTypes(address _tokenContract, uint256 _tokenId)
    external
    view
    returns (ItemTypeIO[] memory installationBalancesOfTokenWithTypes_)
  {
    installationBalancesOfTokenWithTypes_ = ERC998.itemBalancesOfTokenWithTypes(_tokenContract, _tokenId);
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
      bals[i] = s.ownerInstallationBalances[owner][id];
    }
  }

  ///@notice Query the item type of a particular installation
  ///@param _installationTypeId Item to query
  ///@return installationType A struct containing details about the item type of an item with identifier `_itemId`
  function getInstallationType(uint256 _installationTypeId) external view returns (InstallationType memory installationType) {
    require(_installationTypeId < s.installationTypes.length, "InstallationFacet: Item type doesn't exist");
    installationType = s.installationTypes[_installationTypeId];
  }

  ///@notice Query the item type of multiple installation types
  ///@param _installationTypeIds An array containing the identifiers of items to query
  ///@return installationTypes_ An array of structs,each struct containing details about the item type of the corresponding item
  function getInstallationTypes(uint256[] calldata _installationTypeIds) external view returns (InstallationType[] memory installationTypes_) {
    if (_installationTypeIds.length == 0) {
      installationTypes_ = s.installationTypes;
    } else {
      installationTypes_ = new InstallationType[](_installationTypeIds.length);
      for (uint256 i; i < _installationTypeIds.length; i++) {
        installationTypes_[i] = s.installationTypes[_installationTypeIds[i]];
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

  function getAlchemicaAddresses() external view returns (address[] memory) {
    return s.alchemicaAddresses;
  }

  /***********************************|
   |             Write Functions        |
   |__________________________________*/

  function craftInstallations(uint256[] calldata _installationTypes) external {
    for (uint8 i = 0; i < _installationTypes.length; i++) {
      //level check
      require(s.installationTypes[_installationTypes[i]].level == 1, "InstallationFacet: can only craft level 1");
      //take the required alchemica
      InstallationType memory installationType = s.installationTypes[_installationTypes[i]];
      for (uint8 j = 0; j < installationType.alchemicaCost.length; j++) {
        LibERC20.transferFrom(s.alchemicaAddresses[j], msg.sender, address(this), s.installationTypes[_installationTypes[i]].alchemicaCost[j]);
      }

      uint256 readyBlock = block.number + installationType.craftTime;

      //put the installation into a queue
      //each wearable needs a unique queue id
      s.craftQueue.push(QueueItem(s.nextCraftId, readyBlock, _installationTypes[i], false, msg.sender));

      emit AddedToQueue(s.nextCraftId, _installationTypes[i], readyBlock, msg.sender);
      s.nextCraftId++;
    }
    //after queue is over, user can claim installation
  }

  function reduceCraftTime(uint256[] calldata _queueIds, uint256[] calldata _amounts) external {
    require(_queueIds.length == _amounts.length, "InstallationFacet: Mismatched arrays");
    for (uint8 i; i < _queueIds.length; i++) {
      uint256 queueId = _queueIds[i];
      QueueItem storage queueItem = s.craftQueue[queueId];
      require(msg.sender == queueItem.owner, "InstallationFacet: not owner");

      require(block.number <= queueItem.readyBlock, "InstallationFacet: installation already done");

      //todo: check user has enough GLMR
      //todo: burn GLMR tokens

      queueItem.readyBlock -= _amounts[i];
      emit CraftTimeReduced(queueId, _amounts[i]);
    }
  }

  function claimInstallations(uint256[] calldata _queueIds) external {
    for (uint8 i; i < _queueIds.length; i++) {
      uint256 queueId = _queueIds[i];
      QueueItem memory queueItem = s.craftQueue[queueId];
      require(msg.sender == queueItem.owner, "InstallationFacet: not owner");
      require(!queueItem.claimed, "InstallationFacet: already claimed");

      require(block.number >= queueItem.readyBlock, "InstallationFacet: installation not ready");

      // mint installation
      LibERC1155._safeMint(msg.sender, queueItem.installationType, queueItem.id);
      emit QueueClaimed(queueId);
    }
  }

  function equipInstallation(
    address _owner,
    uint256 _realmId,
    uint256 _installationType
  ) external onlyRealmDiamond {
    ERC998.removeFromOwner(_owner, _installationType, 1);
    ERC998.addToParent(s.realmDiamond, _realmId, _installationType, 1);
    emit TransferToParent(s.realmDiamond, _realmId, _installationType, 1);
  }

  function unequipInstallation(
    address _owner,
    uint256 _realmId,
    uint256 _installationType
  ) external onlyRealmDiamond {
    ERC998.removeFromParent(s.realmDiamond, _realmId, _installationType, 1);
    LibERC1155._burn(_owner, _installationType, 1);
  }

  // TODO function upgradeInstallations()

  /***********************************|
   |             Owner Functions        |
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

  function setAlchemicaAddresses(address[] memory _addresses) external onlyOwner {
    s.alchemicaAddresses = _addresses;
  }

  function addInstallationTypes(InstallationType[] calldata _installationTypes) external onlyOwner {
    for (uint16 i = 0; i < _installationTypes.length; i++) {
      s.installationTypes.push(
        InstallationType(
          _installationTypes[i].installationType,
          _installationTypes[i].level,
          _installationTypes[i].width,
          _installationTypes[i].height,
          _installationTypes[i].alchemicaType,
          _installationTypes[i].alchemicaCost,
          _installationTypes[i].harvestRate,
          _installationTypes[i].capacity,
          _installationTypes[i].spillRadius,
          _installationTypes[i].spillPercentage,
          _installationTypes[i].craftTime
        )
      );
    }
  }

  // TODO function updateInstallationType(Installation memory _updatedInstallation) external onlyOwner {}
}
