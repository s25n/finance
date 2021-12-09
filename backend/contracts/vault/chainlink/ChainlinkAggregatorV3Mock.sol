// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract ChainlinkAggregatorV3Mock {
    int256 public price; // Prices in Chainlink can be negative (!)
    uint256 public timestamp;
    uint8 public decimals = 18; // Decimals provided in the oracle prices

    function setPrice(uint256 price_) external {
        // We provide prices with 18 decimals, which will be scaled Chainlink's decimals
        price = int256(price_);
        timestamp = block.timestamp;
    }

    function latestRoundData()
        public
        view
        returns (
            uint80,
            int256,
            uint256,
            uint256,
            uint80
        )
    {
        return (0, price, 0, timestamp, 0);
    }
}
