// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "../libraries/AppStorage.sol";
import "../libraries/LibDiamond.sol";
import "../libraries/LibStrings.sol";
import "../libraries/LibMeta.sol";
import "../libraries/LibERC1155.sol";
import "../interfaces/IERC1155Marketplace.sol";

contract ERC1155Facet is Modifiers {
  function isApprovedForAll(address account, address operator) public view returns (bool operators_) {
    operators_ = s.operators[account][operator];
  }

  /**
  @notice Transfers `_value` amount of an `_id` from the `_from` address to the `_to` address specified (with safety call).
        @dev Caller must be approved to manage the tokens being transferred out of the `_from` account (see "Approval" section of the standard).
        MUST revert if `_to` is the zero address.
        MUST revert if balance of holder for token `_id` is lower than the `_value` sent.
        MUST revert on any other error.
        MUST emit the `TransferSingle` event to reflect the balance change (see "Safe Transfer Rules" section of the standard).
        After the above conditions are met, this function MUST check if `_to` is a smart contract (e.g. code size > 0). If so, it MUST call `onERC1155Received` on `_to` and act appropriately (see "Safe Transfer Rules" section of the standard).        
        @param _from    Source address
        @param _to      Target address
        @param _id      ID of the token type
        @param _value   Transfer amount
        @param _data    Additional data with no specified format, MUST be sent unaltered in call to `onERC1155Received` on `_to`
    */
  function safeTransferFrom(
    address _from,
    address _to,
    uint256 _id,
    uint256 _value,
    bytes calldata _data
  ) external {
    require(_to != address(0), "ERC1155Facet: Can't transfer to 0 address");
    address sender = LibMeta.msgSender();
    require(sender == _from || s.operators[_from][sender] || sender == address(this), "ERC1155Facet: Not owner and not approved to transfer");
    LibERC1155.removeFromOwner(_from, _id, _value);
    LibERC1155.addToOwner(_to, _id, _value);
    IERC1155Marketplace(s.aavegotchiDiamond).updateERC1155Listing(address(this), _id, _from);
    emit LibERC1155.TransferSingle(sender, _from, _to, _id, _value);
    LibERC1155.onERC1155Received(sender, _from, _to, _id, _value, _data);
  }

  /**
        @notice Transfers `_values` amount(s) of `_ids` from the `_from` address to the `_to` address specified (with safety call).
        @dev Caller must be approved to manage the tokens being transferred out of the `_from` account (see "Approval" section of the standard).
        MUST revert if `_to` is the zero address.
        MUST revert if length of `_ids` is not the same as length of `_values`.
        MUST revert if any of the balance(s) of the holder(s) for token(s) in `_ids` is lower than the respective amount(s) in `_values` sent to the recipient.
        MUST revert on any other error.        
        MUST emit `TransferSingle` or `TransferBatch` event(s) such that all the balance changes are reflected (see "Safe Transfer Rules" section of the standard).
        Balance changes and events MUST follow the ordering of the arrays (_ids[0]/_values[0] before _ids[1]/_values[1], etc).
        After the above conditions for the transfer(s) in the batch are met, this function MUST check if `_to` is a smart contract (e.g. code size > 0). If so, it MUST call the relevant `ERC1155TokenReceiver` hook(s) on `_to` and act appropriately (see "Safe Transfer Rules" section of the standard).                      
        @param _from    Source address
        @param _to      Target address
        @param _ids     IDs of each token type (order and length must match _values array)
        @param _values  Transfer amounts per token type (order and length must match _ids array)
        @param _data    Additional data with no specified format, MUST be sent unaltered in call to the `ERC1155TokenReceiver` hook(s) on `_to`
    */
  function safeBatchTransferFrom(
    address _from,
    address _to,
    uint256[] calldata _ids,
    uint256[] calldata _values,
    bytes calldata _data
  ) external {
    require(_to != address(0), "ItemsTransfer: Can't transfer to 0 address");
    require(_ids.length == _values.length, "ItemsTransfer: ids not same length as values");
    address sender = LibMeta.msgSender();
    require(sender == _from || s.operators[_from][sender], "ItemsTransfer: Not owner and not approved to transfer");
    for (uint256 i; i < _ids.length; i++) {
      uint256 id = _ids[i];
      uint256 value = _values[i];
      LibERC1155.removeFromOwner(_from, id, value);
      LibERC1155.addToOwner(_to, id, value);
      IERC1155Marketplace(s.aavegotchiDiamond).updateERC1155Listing(address(this), id, _from);
    }
    emit LibERC1155.TransferBatch(sender, _from, _to, _ids, _values);
    LibERC1155.onERC1155BatchReceived(sender, _from, _to, _ids, _values, _data);
  }

  function setApprovalForAll(
    address owner,
    address operator,
    bool approved
  ) external {
    require(owner != operator, "ERC1155Facet: setting approval status for self");
    s.operators[owner][operator] = approved;
    emit LibERC1155.ApprovalForAll(owner, operator, approved);
  }
}
