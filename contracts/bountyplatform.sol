//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract bountyplatform {
    // Define event for logging BountyClosed
    event BountyClosed(uint256 indexed id);

    // Define event for logging BountyClaimed
    event BountyClaimed(uint256 indexed id, address sender);
    
    // Define event for logging BountyCancelled
    event BountyCancelled(uint256 indexed id);

    // Define struct to represent a bounty
    struct Bounty {
        address issuer;
        string title;
        string description;
        uint256 reward;
        bool isClosed;
        address winner;
    }

    // Mapping of bounties to their respective ids
    mapping(uint256 => Bounty) public bounties;
    uint256 public numBounties;

    // Creates a new bounty
    function createBounty(string memory _title, string memory _description, uint256 _reward) public {
        bounties[numBounties] = Bounty(msg.sender, _title, _description, _reward, false, address(0));
        numBounties++;
    }

    // Closes a bounty and sets the winner
    function closeBounty(uint256 _id) public {
        require(bounties[_id].issuer == msg.sender, "Only the issuer of the bounty can close it.");
        require(!bounties[_id].isClosed, "Bounty is already closed.");
        bounties[_id].isClosed = true;
        emit BountyClosed(_id);
    }

    // Claims a bounty and sets the winner
    function claimBounty(uint256 _id) public {
        require(bounties[_id].isClosed == true, "Bounty must be closed to claim it.");
        require(bounties[_id].winner == address(0), "Bounty has already been claimed.");
        bounties[_id].winner = msg.sender;
        emit BountyClaimed(_id, msg.sender);
    }

    // Allows the issuer to cancel the bounty if it hasn't been claimed yet
    function cancelBounty(uint256 _id) public {
        require(bounties[_id].issuer == msg.sender, "Only the issuer of the bounty can cancel it.");
        require(bounties[_id].winner == address(0), "Bounty has already been claimed and can no longer be cancelled.");
        delete bounties[_id];
        emit BountyCancelled(_id);
    }

    // Gets the information about a specific bounty
    function getBounty(uint256 _id) public view returns (address issuer, string memory title, string memory description, uint256 reward, bool isClosed, address winner) {
        Bounty storage bounty = bounties[_id];
        issuer = bounty.issuer;
        title = bounty.title;
        description = bounty.description;
        reward = bounty.reward;
        isClosed = bounty.isClosed;
        winner = bounty.winner;
    }
}
