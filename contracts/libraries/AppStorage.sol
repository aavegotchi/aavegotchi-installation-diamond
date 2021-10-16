// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;
import {LibDiamond} from "./LibDiamond.sol";

struct Installation {
  address owner;
  uint256 itemId;
  uint256 width;
  uint256 height;
}

struct AppStorage {
  mapping(uint256 => Installation) installationTypes;
  mapping(address => mapping(uint256 => mapping(uint256 => uint256))) nftItemBalances;
  mapping(address => mapping(uint256 => uint256[])) nftItems;
  mapping(address => mapping(uint256 => mapping(uint256 => uint256))) nftItemIndexes;
  mapping(address => mapping(uint256 => uint256)) ownerItemBalances;
  mapping(address => uint256[]) ownerItems;
  mapping(address => mapping(uint256 => uint256)) ownerItemIndexes;
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
}
