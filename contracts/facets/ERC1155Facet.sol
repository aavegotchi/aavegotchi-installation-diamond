// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "../libraries/AppStorage.sol";
import "../libraries/LibDiamond.sol";
import "../libraries/LibStrings.sol";
import "../libraries/LibMeta.sol";
import "../libraries/LibERC1155.sol";

contract ERC1155Facet is Modifiers {
  function isApprovedForAll(address account, address operator) public view returns (bool operatorApprovals_) {
    operatorApprovals_ = s.operatorApprovals[account][operator];
  }

  function safeTransferFrom(
    address from,
    address to,
    uint256 id,
    uint256 amount,
    bytes memory data
  ) external {
    require(from == LibMeta.msgSender() || isApprovedForAll(from, LibMeta.msgSender()), "ERC1155Facet: caller is not owner nor approved");
    LibERC1155._transferFrom(from, to, id, amount, data);
  }

  function safeBatchTransferFrom(
    address from,
    address to,
    uint256[] memory ids,
    uint256[] memory amounts,
    bytes memory data
  ) external {
    require(from == LibMeta.msgSender() || isApprovedForAll(from, LibMeta.msgSender()), "ERC1155: transfer caller is not owner nor approved");
    LibERC1155._batchTransferFrom(from, to, ids, amounts, data);
  }

  function setApprovalForAll(
    address owner,
    address operator,
    bool approved
  ) external {
    require(owner != operator, "ERC1155Facet: setting approval status for self");
    s.operatorApprovals[owner][operator] = approved;
    emit LibERC1155.ApprovalForAll(owner, operator, approved);
  }
}
