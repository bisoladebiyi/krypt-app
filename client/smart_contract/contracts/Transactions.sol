//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0; 

contract Transactions {
    uint256 TransactionCount;

    event Transfer(address from, address to, uint amount, string message, uint256 timestamp, string keyword);
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] AllTransactions;

    function addToBlockChain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        TransactionCount += 1;
        AllTransactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransfers() public view returns (TransferStruct[] memory){
        return AllTransactions;
    }

    function getTransferCount() public view returns (uint256) {
        return TransactionCount;
    }
}