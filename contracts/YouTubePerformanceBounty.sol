// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/docs/link-token-contracts/
 */

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * THIS EXAMPLE USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

contract YouTubePerformanceBounty is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    // multiple params returned in a single oracle response
    uint256 public views;
    uint256 public comments;
    bytes32 private jobId;
    uint256 private fee;

    event  RequestMultipleFulfilled(bytes32 indexed requestId, uint256 views, uint256 comments);

    /**
     * @notice Initialize the link token and target oracle
     *
     * Goerli Testnet details:
     * Link Token: 
     * Oracle: (Chainlink DevRel)
     * jobId: ca98366cc7314957b8c012c72f05aeeb
     *
     */
    constructor(
        string memory videoId,
        uint256 desiredViewsCount,
        uint256 desiredCommentsCount
    ) ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB); // address of the LINK contract on Goerli
        setChainlinkOracle(0x03cD282a023cB0A7311A5049A68399cfd43bB870);  // address of the Chainlink Oracle/Operator contract on Goerli
        jobId = "d7b04fbe0f534f879df5d9c76f069fca";  // External Job ID // when you register the JobID with a Chainlink node you will be given a JobID // remove the hyphens before including
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0,1 * 10**18 (Varies by network and job)
    }

    /**
     * Create a Chainlink request to retrieve API response, find the target
     * data
     */
    function requestMultipleParameters() public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );

        req.add(
            "id",
            "ftuu7B0B7EM"
        );

        req.add(
            "part",
            "statistics"
        );

        // Sends the request
        return sendChainlinkRequest(req, fee);
    }

    /**
     * Receive the response in the form of uint256
     */
    function fulfill(
        bytes32 _requestId,
        uint256 _views,
        uint256 _comments
    ) public recordChainlinkFulfillment(_requestId) {
        emit RequestMultipleFulfilled(_requestId, _views, _comments);
        views = _views;
        comments = _comments;
    }

    /**
     * Allow withdraw of Link tokens from the contract
     */
    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
