// SPDX-License-Identifier: UNLICENSED
// © Copyright 2021. Patent pending. All rights reserved. Perpetual Altruism Ltd.
pragma solidity 0.8.5; 

import "./IGBMInitiator.sol";

/// @title GBM auction contract Initiator
/// @dev Implementation of IGBM. Feel free to cook up your own implementation for more complex patterns.
/// @author Guillaume Gonnaud
contract GBMInitiator is IGBMInitiator {

    // To future developpers: All the getters are called AFTER the auction ID has been generated and hence you can lookup
    // token_ID/Token contract/token kind using the main GBM contract getters(auctionId) if you want to return determinstic values
    
    address public owner;

    uint256 internal auction_startTime;             // _auctionID => timestamp
    uint256 internal auction_endTime;               // _auctionID => timestamp
    uint256 internal auction_hammerTimeDuration;    // _auctionID => duration in seconds
    uint256 internal auction_bidDecimals;           // _auctionID => bidDecimals
    uint256 internal auction_stepMin;               // _auctionID => stepMin
    uint256 internal auction_incMin;                // _auctionID => minimal earned incentives
    uint256 internal auction_incMax;                // _auctionID => maximal earned incentives
    uint256 internal auction_bidMultiplier;         // _auctionID => bid incentive growth multiplier    

    constructor()
    {
        owner = msg.sender;
    }

    function getStartTime(uint256 /* _auctionID */) external view override returns(uint256){
        return(auction_startTime);
    }

    function getEndTime(uint256 /* _auctionID */) external view override returns(uint256){
        return(auction_endTime);
    }

    function getHammerTimeDuration( uint256 /* _auctionID */) external view override returns(uint256){
        return(auction_hammerTimeDuration);
    }

    function getBidDecimals(uint256 /* _auctionID */) external view override returns(uint256){
        return(auction_bidDecimals);
    }

    function getStepMin(uint256 /* _auctionID */) external view override returns(uint256){
        return(auction_stepMin);
    }

    function getIncMin(uint256 /* _auctionID */) external view override returns(uint256){
        return(auction_incMin);
    }

    function getIncMax(uint256 /* _auctionID */) external view override returns(uint256){
        return(auction_incMax);
    }

    function getBidMultiplier(uint256 /* _auctionID */) external view override returns(uint256){
        return(auction_bidMultiplier);
    }

    function setStartTime(uint256 _auction_startTime) external{
        require(owner == msg.sender);
        auction_startTime = _auction_startTime;
    }

    function setEndTime(uint256 _auction_endTime) external{
        require(owner == msg.sender);
        auction_endTime = _auction_endTime;
    }

    function setHammerTimeDuration(uint256 _auction_hammerTimeDuration) external{
        require(owner == msg.sender);
        auction_hammerTimeDuration = _auction_hammerTimeDuration;
    }

    function setBidDecimals(uint256 _auction_bidDecimals) external{
        require(owner == msg.sender);
        auction_bidDecimals = _auction_bidDecimals;
    }

    function setStepMin(uint256 _auction_stepMin) external{
        require(owner == msg.sender);
        auction_stepMin = _auction_stepMin;
    }

    function setIncMin(uint256 _auction_incMin) external{
        require(owner == msg.sender);
        auction_incMin = _auction_incMin;
    }

    function setIncMax(uint256 _auction_incMax) external{
        require(owner == msg.sender);
        auction_incMax = _auction_incMax;
    }

    function setBidMultiplier(uint256 _auction_bidMultiplier) external{
        require(owner == msg.sender);
        auction_bidMultiplier = _auction_bidMultiplier;
    }

}
