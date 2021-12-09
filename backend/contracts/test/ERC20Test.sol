// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title ERC20Test
/// @notice This ERC20 is only for the test
contract ERC20Test is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, 1e36 / 2);
        _mint(address(this), 1e36 / 2);
    }

    /// @notice The faucet is for testing ELYFI functions
    function faucet() external {
        _transfer(address(this), msg.sender, 1e27);
    }
}
