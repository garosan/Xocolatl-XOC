export const vaultABI = [
  {
    inputs: [
      { internalType: "address", name: "_pool", type: "address" },
      { internalType: "bool", name: "_allowToken0", type: "bool" },
      { internalType: "bool", name: "_allowToken1", type: "bool" },
      { internalType: "address", name: "_usdOracle0Ref", type: "address" },
      { internalType: "address", name: "_usdOracle1Ref", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [{ internalType: "address", name: "target", type: "address" }], name: "AddressEmptyCode", type: "error" },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "AddressInsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "allowance", type: "uint256" },
      { internalType: "uint256", name: "needed", type: "uint256" },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "uint256", name: "balance", type: "uint256" },
      { internalType: "uint256", name: "needed", type: "uint256" },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "approver", type: "address" }],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "receiver", type: "address" }],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  { inputs: [{ internalType: "address", name: "sender", type: "address" }], name: "ERC20InvalidSender", type: "error" },
  {
    inputs: [{ internalType: "address", name: "spender", type: "address" }],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  { inputs: [], name: "FailedInnerCall", type: "error" },
  { inputs: [{ internalType: "address", name: "owner", type: "address" }], name: "OwnableInvalidOwner", type: "error" },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  { inputs: [], name: "UniswapV3TokenizedLp_BasePositionInvalid", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_FeeMustBeLtePrecision", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_InvalidBaseBpsRange", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_LimitPositionInvalid", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_MaxTotalSupplyExceeded", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_MoreThanMaxDeposit", type: "error" },
  {
    inputs: [{ internalType: "uint256", name: "instance", type: "uint256" }],
    name: "UniswapV3TokenizedLp_MustBePool",
    type: "error",
  },
  { inputs: [], name: "UniswapV3TokenizedLp_NoAllowedTokens", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_NoWithdrawOrTransferDuringDelay", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_NotAllowed", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_PoolLocked", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_PositionOutOfRange", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_SetBaseTicksViaRebalanceFirst", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_SplitMustBeLtePrecision", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_Token0NotAllowed", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_Token1NotAllowed", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_UnexpectedBurn", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_UnsafeCast", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_ZeroAddress", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_ZeroValue", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_alreadyInitialized", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_failedToQueryPool", type: "error" },
  { inputs: [], name: "UniswapV3TokenizedLp_invalidSlot0Size", type: "error" },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "uint256", name: "newBlockWaitTime", type: "uint256" }],
    name: "ActionBlockDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "address", name: "affiliate", type: "address" }],
    name: "Affiliate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "owner", type: "address" },
      { indexed: true, internalType: "address", name: "spender", type: "address" },
      { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "address", name: "rebalancer", type: "address" },
      { indexed: false, internalType: "bool", name: "isApproved", type: "bool" },
    ],
    name: "ApprovedRebalancer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "newBpsRangeLower", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "newBpsRangeUpper", type: "uint256" },
    ],
    name: "BpsRanges",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      { indexed: false, internalType: "uint256", name: "shares", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount0", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount1", type: "uint256" },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "newDeposit0Max", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "newDeposit1Max", type: "uint256" },
    ],
    name: "DepositMax",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "address", name: "newFeeRecipient", type: "address" }],
    name: "FeeRecipient",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "uint256", name: "newFeeSplit", type: "uint256" }],
    name: "FeeSplit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "uint256", name: "newFee", type: "uint256" }],
    name: "FeeUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "uint256", name: "newHysteresis", type: "uint256" }],
    name: "Hysteresis",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "uint256", name: "newMaxTotalSupply", type: "uint256" }],
    name: "MaxTotalSupply",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
      { indexed: true, internalType: "address", name: "newOwner", type: "address" },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "int24", name: "tick", type: "int24" },
      { indexed: false, internalType: "uint256", name: "totalAmount0", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "totalAmount1", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "feeAmount0", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "feeAmount1", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "totalSupply", type: "uint256" },
    ],
    name: "Rebalance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "address", name: "usd0RefOracle", type: "address" },
      { indexed: false, internalType: "address", name: "usd1RefOracle", type: "address" },
    ],
    name: "UsdOracleReferences",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      { indexed: false, internalType: "uint256", name: "shares", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount0", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount1", type: "uint256" },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_BASE_FEE",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_BASE_FEE_SPLIT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FULL_PERCENT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NULL_ADDRESS",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRECISION",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "actionBlockDelay",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "affiliate",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allowToken0",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allowToken1",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "approvedRebalancer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bool", name: "useOracleForNewBounds", type: "bool" },
      { internalType: "bool", name: "withSwapping", type: "bool" },
    ],
    name: "autoRebalance",
    outputs: [
      { internalType: "int256", name: "amount0", type: "int256" },
      { internalType: "int256", name: "amount1", type: "int256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseLower",
    outputs: [{ internalType: "int24", name: "", type: "int24" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseUpper",
    outputs: [{ internalType: "int24", name: "", type: "int24" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bpsRangeLower",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bpsRangeUpper",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentTick",
    outputs: [{ internalType: "int24", name: "tick", type: "int24" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "deposit0", type: "uint256" },
      { internalType: "uint256", name: "deposit1", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
    ],
    name: "deposit",
    outputs: [{ internalType: "uint256", name: "shares", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit0Max",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit1Max",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeRecipient",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeSplit",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenIn_", type: "address" },
      { internalType: "address", name: "tokenOut_", type: "address" },
      { internalType: "uint256", name: "amountIn_", type: "uint256" },
    ],
    name: "fetchOracle",
    outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_tokenIn", type: "address" },
      { internalType: "address", name: "_tokenOut", type: "address" },
      { internalType: "uint256", name: "_amountIn", type: "uint256" },
    ],
    name: "fetchSpot",
    outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBasePosition",
    outputs: [
      { internalType: "uint128", name: "liquidity", type: "uint128" },
      { internalType: "uint256", name: "amount0", type: "uint256" },
      { internalType: "uint256", name: "amount1", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBasePositionFeeAccumulated",
    outputs: [
      { internalType: "uint128", name: "liquidity", type: "uint128" },
      { internalType: "uint256", name: "amount0", type: "uint256" },
      { internalType: "uint256", name: "amount1", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentSqrtPriceX96",
    outputs: [{ internalType: "uint160", name: "sqrtPriceX96", type: "uint160" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTimeWeightedSqrtPriceX96",
    outputs: [{ internalType: "uint160", name: "sqrtPriceX96", type: "uint160" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalAmounts",
    outputs: [
      { internalType: "uint256", name: "total0", type: "uint256" },
      { internalType: "uint256", name: "total1", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalAmountsFeeAccumulated",
    outputs: [
      { internalType: "uint256", name: "total0", type: "uint256" },
      { internalType: "uint256", name: "total1", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "hysteresis",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxTotalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "int24", name: "_baseLower", type: "int24" },
      { internalType: "int24", name: "_baseUpper", type: "int24" },
      { internalType: "int256", name: "swapQuantity", type: "int256" },
      { internalType: "int24", name: "tickLimit", type: "int24" },
    ],
    name: "rebalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [{ internalType: "uint256", name: "_blockWaitTime", type: "uint256" }],
    name: "setActionBlockDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_affiliate", type: "address" }],
    name: "setAffiliate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovedRebalancer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_bpsRangeLower", type: "uint256" },
      { internalType: "uint256", name: "_bpsRangeUpper", type: "uint256" },
    ],
    name: "setBpsRanges",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_deposit0Max", type: "uint256" },
      { internalType: "uint256", name: "_deposit1Max", type: "uint256" },
    ],
    name: "setDepositMax",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_fee", type: "uint256" }],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_feeRecipient", type: "address" }],
    name: "setFeeRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_feeSplit", type: "uint256" }],
    name: "setFeeSplit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_hysteresis", type: "uint256" }],
    name: "setHysteresis",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_maxTotalSupply", type: "uint256" }],
    name: "setMaxTotalSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "usdOracle0Ref_", type: "address" },
      { internalType: "address", name: "usdOracle1Ref_", type: "address" },
    ],
    name: "setUsdOracles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "int256", name: "swapInputAmount", type: "int256" },
      { internalType: "int24", name: "tickLimit", type: "int24" },
      { internalType: "bool", name: "addToLiquidity", type: "bool" },
    ],
    name: "swapIdleAndAddToLiquidity",
    outputs: [
      { internalType: "int256", name: "amount0", type: "int256" },
      { internalType: "int256", name: "amount1", type: "int256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tickSpacing",
    outputs: [{ internalType: "int24", name: "", type: "int24" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amount0", type: "uint256" },
      { internalType: "uint256", name: "amount1", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "uniswapV3MintCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "int256", name: "amount0Delta", type: "int256" },
      { internalType: "int256", name: "amount1Delta", type: "int256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdOracle0Ref",
    outputs: [{ internalType: "contract IPriceFeed", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "usdOracle1Ref",
    outputs: [{ internalType: "contract IPriceFeed", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "shares", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
    ],
    name: "withdraw",
    outputs: [
      { internalType: "uint256", name: "amount0", type: "uint256" },
      { internalType: "uint256", name: "amount1", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
