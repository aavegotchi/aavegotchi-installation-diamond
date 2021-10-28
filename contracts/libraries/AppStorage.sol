// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;
import {LibDiamond} from "./LibDiamond.sol";

struct Installation {
  uint16 installationType; //0 = harvester, 1 = reservoir, 2 = altar, 3 = gotchi lodge
  uint16 level;
  uint256 width;
  uint256 height;
  uint16 alchemicaType;
  uint256[] alchemicaCost; // [fud, fomo, alpha, kek]
  uint256 craftTime; // in blocks
  // glam token to reduce craftTime
}

struct Harvester {
  uint16 alchemicaType; //0 = none 1 = fud, 2 = fomo, 3 = alpha, 4 = kek
  uint256 harvestRate;
}

struct Reservoir {
  uint16 alchemicaType;
  uint256 capacity;
  uint256 spillRadius;
  uint256 spillPercentage;
}

struct InstallationQueue {
  address owner;
  uint256 startBlock;
  uint256 installationType;
}

struct AppStorage {
  address installationContract;
  address[] alchemicaAddresses;
  string baseUri;
  Installation[] installationTypes;
  // user => queueId => InstallationQueue
  mapping(address => mapping(uint256 => InstallationQueue)) installationQueue;
  // user => nextQueueId
  mapping(address => uint256) queuesIds;
  //ERC998 vars
  mapping(address => mapping(uint256 => mapping(uint256 => uint256))) nftItemBalances;
  mapping(address => mapping(uint256 => uint256[])) nftItems;
  mapping(address => mapping(uint256 => mapping(uint256 => uint256))) nftItemIndexes;
  mapping(address => mapping(uint256 => uint256)) ownerItemBalances;
  mapping(address => uint256[]) ownerItems;
  mapping(address => mapping(uint256 => uint256)) ownerItemIndexes;
  //Installation metadata
  // mapping(uint16 => Reservoir) levelToReservoir;
  // mapping(uint16 => Harvester) levelToHarvester;
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

  // modifier onlyParcelOwner() {}

  modifier onlyOwner() {
    LibDiamond.enforceIsContractOwner();
    _;
  }
}
