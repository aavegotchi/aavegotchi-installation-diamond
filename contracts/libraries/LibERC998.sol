// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import {LibAppStorage, AppStorage, InstallationType} from "./AppStorage.sol";
import {LibERC1155} from "./LibERC1155.sol";

struct ItemTypeIO {
  uint256 balance;
  uint256 itemId;
  InstallationType installationType;
}

library ERC998 {
  function itemBalancesOfTokenWithTypes(address _tokenContract, uint256 _tokenId)
    internal
    view
    returns (ItemTypeIO[] memory itemBalancesOfTokenWithTypes_)
  {
    AppStorage storage s = LibAppStorage.diamondStorage();
    uint256 count = s.nftInstallations[_tokenContract][_tokenId].length;
    itemBalancesOfTokenWithTypes_ = new ItemTypeIO[](count);
    for (uint256 i; i < count; i++) {
      uint256 itemId = s.nftInstallations[_tokenContract][_tokenId][i];
      uint256 bal = s.nftInstallationBalances[_tokenContract][_tokenId][itemId];
      itemBalancesOfTokenWithTypes_[i].itemId = itemId;
      itemBalancesOfTokenWithTypes_[i].balance = bal;
      itemBalancesOfTokenWithTypes_[i].installationType = s.installationTypes[itemId];
    }
  }

  function addToParent(
    address _toContract,
    uint256 _toTokenId,
    uint256 _id,
    uint256 _value
  ) internal {
    AppStorage storage s = LibAppStorage.diamondStorage();
    s.nftInstallationBalances[_toContract][_toTokenId][_id] += _value;
    if (s.nftInstallationIndexes[_toContract][_toTokenId][_id] == 0) {
      s.nftInstallations[_toContract][_toTokenId].push(uint16(_id));
      s.nftInstallationIndexes[_toContract][_toTokenId][_id] = s.nftInstallations[_toContract][_toTokenId].length;
    }
  }

  function addToOwner(
    address _to,
    uint256 _id,
    uint256 _value
  ) internal {
    AppStorage storage s = LibAppStorage.diamondStorage();
    s.ownerInstallationBalances[_to][_id] += _value;
    if (s.ownerInstallationIndexes[_to][_id] == 0) {
      s.ownerInstallations[_to].push(uint16(_id));
      s.ownerInstallationIndexes[_to][_id] = s.ownerInstallations[_to].length;
    }
  }

  function removeFromOwner(
    address _from,
    uint256 _id,
    uint256 _value
  ) internal {
    AppStorage storage s = LibAppStorage.diamondStorage();
    uint256 bal = s.ownerInstallationBalances[_from][_id];
    require(_value <= bal, "LibItems: Doesn't have that many to transfer");
    bal -= _value;
    s.ownerInstallationBalances[_from][_id] = bal;
    if (bal == 0) {
      uint256 index = s.ownerInstallationIndexes[_from][_id] - 1;
      uint256 lastIndex = s.ownerInstallations[_from].length - 1;
      if (index != lastIndex) {
        uint256 lastId = s.ownerInstallations[_from][lastIndex];
        s.ownerInstallations[_from][index] = uint16(lastId);
        s.ownerInstallationIndexes[_from][lastId] = index + 1;
      }
      s.ownerInstallations[_from].pop();
      delete s.ownerInstallationIndexes[_from][_id];
    }
  }

  function removeFromParent(
    address _fromContract,
    uint256 _fromTokenId,
    uint256 _id,
    uint256 _value
  ) internal {
    AppStorage storage s = LibAppStorage.diamondStorage();
    uint256 bal = s.nftInstallationBalances[_fromContract][_fromTokenId][_id];
    require(_value <= bal, "Items: Doesn't have that many to transfer");
    bal -= _value;
    s.nftInstallationBalances[_fromContract][_fromTokenId][_id] = bal;
    if (bal == 0) {
      uint256 index = s.nftInstallationIndexes[_fromContract][_fromTokenId][_id] - 1;
      uint256 lastIndex = s.nftInstallations[_fromContract][_fromTokenId].length - 1;
      if (index != lastIndex) {
        uint256 lastId = s.nftInstallations[_fromContract][_fromTokenId][lastIndex];
        s.nftInstallations[_fromContract][_fromTokenId][index] = uint16(lastId);
        s.nftInstallationIndexes[_fromContract][_fromTokenId][lastId] = index + 1;
      }
      s.nftInstallations[_fromContract][_fromTokenId].pop();
      delete s.nftInstallationIndexes[_fromContract][_fromTokenId][_id];
      if (_fromContract == address(this)) {
        // checkWearableIsEquipped(_fromTokenId, _id);
      }
    }

    /*
    if (_fromContract == address(this) && bal == 1) {
      Aavegotchi storage aavegotchi = s.aavegotchis[_fromTokenId];
      if (
        aavegotchi.equippedWearables[LibItems.WEARABLE_SLOT_HAND_LEFT] == _id &&
        aavegotchi.equippedWearables[LibItems.WEARABLE_SLOT_HAND_RIGHT] == _id
      ) {
        revert("LibItems: Can't hold 1 item in both hands");
      }
      */
    // }
  }

  /*
  function checkWearableIsEquipped(uint256 _fromTokenId, uint256 _id) internal view {
    AppStorage storage s = LibAppStorage.diamondStorage();
    for (uint256 i; i < EQUIPPED_WEARABLE_SLOTS; i++) {
      require(s.aavegotchis[_fromTokenId].equippedWearables[i] != _id, "Items: Cannot transfer wearable that is equipped");
    }
  }
  */
}
