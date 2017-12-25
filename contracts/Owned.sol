pragma solidity ^0.4.11;

contract Owned {
    address owner;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    // constructor
    function Owned() {
        owner = msg.sender;
    }

}