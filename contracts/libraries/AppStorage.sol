// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;
import {LibDiamond} from "./LibDiamond.sol";

struct InstallationType {
  uint16 installationType; //0 = harvester, 1 = reservoir, 2 = altar, 3 = gotchi lodge
  uint16 level;
  uint256 width;
  uint256 height;
  uint16 alchemicaType; //0 = none 1 = fud, 2 = fomo, 3 = alpha, 4 = kek
  uint256[] alchemicaCost; // [fud, fomo, alpha, kek]
  uint256 harvestRate;
  uint256 capacity;
  uint256 spillRadius;
  uint256 spillPercentage;
  uint256 craftTime; // in blocks
  // glam token to reduce craftTime
}

struct QueueItem {
  uint256 id;
  uint256 readyBlock;
  uint256 installationType;
  bool claimed;
  address owner;
}

struct AppStorage {
  address realmDiamond;
  address aavegotchiDiamond;
  address[] alchemicaAddresses;
  string baseUri;
  InstallationType[] installationTypes;
  QueueItem[] craftQueue;
  uint256 nextCraftId;
  //ERC1155 vars
  mapping(address => mapping(address => bool)) operators;
  //ERC998 vars
  mapping(address => mapping(uint256 => mapping(uint256 => uint256))) nftInstallationBalances;
  mapping(address => mapping(uint256 => uint256[])) nftInstallations;
  mapping(address => mapping(uint256 => mapping(uint256 => uint256))) nftInstallationIndexes;
  mapping(address => mapping(uint256 => uint256)) ownerInstallationBalances;
  mapping(address => uint256[]) ownerInstallations;
  mapping(address => mapping(uint256 => uint256)) ownerInstallationIndexes;
}

library LibAppStorage {
  function diamondStorage() internal pure returns (AppStorage storage ds) {
    assembly {
      ds.slot := 0
    }
  }
}

contract Modifiers {
  AppStorage internal s;

  modifier onlyOwner() {
    LibDiamond.enforceIsContractOwner();
    _;
  }

  modifier onlyRealmDiamond() {
    require(msg.sender == s.realmDiamond, "LibDiamond: Must be realm diamond");
    _;
  }
}
