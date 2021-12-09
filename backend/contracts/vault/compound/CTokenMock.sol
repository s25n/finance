// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract CTokenMock {
    uint256 public exchangeRateStored;
    uint256 public borrowIndex;
    uint256 counter; // Just to avoid warnings

    function setExchangeRate(uint256 chi) external {
        exchangeRateStored = chi;
    }

    function setBorrowIndex(uint256 chi) external {
        borrowIndex = chi;
    }

    function exchangeRateCurrent() public returns (uint256) {
        counter++;
        return exchangeRateStored;
    }
}
