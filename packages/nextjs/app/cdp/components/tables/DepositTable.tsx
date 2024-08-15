import React, { useCallback, useState } from "react";
import DepositModal from "../modals/DepositModal";
import WithdrawModal from "../modals/WithdrawModal";
import BalanceOf from "@/app/lending/components/BalanceOf";
import useAccountAddress from "@/hooks/useAccount";
import { Address } from "viem";
import { useChainId } from "wagmi";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

// Define the assets for each chain
const assets: {
  [key: number]: {
    name: string;
    maxLTV: string;
    liquidationThreshold: string;
    houseOfReserveContract: Address;
    assetContract: Address;
  }[];
} = {
  56: [
    {
      name: "WETH",
      maxLTV: "85%",
      liquidationThreshold: "85%",
      houseOfReserveContract: "0xd411BE9A105Ea7701FabBe58C2834b7033EBC203",
      assetContract: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    },
    {
      name: "WBNB",
      maxLTV: "70%",
      liquidationThreshold: "85%",
      houseOfReserveContract: "0x070ccE6887E70b75015F948b12601D1E759D2024",
      assetContract: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
    },
  ],
  137: [
    {
      name: "WETH",
      maxLTV: "85%",
      liquidationThreshold: "85%",
      houseOfReserveContract: "0xd411BE9A105Ea7701FabBe58C2834b7033EBC203",
      assetContract: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    },
    {
      name: "wstETH",
      maxLTV: "70%",
      liquidationThreshold: "85%",
      houseOfReserveContract: "0x28C7DF27e5bC7Cb004c8D4bb2C2D91f246D0A2C9",
      assetContract: "0x03b54a6e9a984069379fae1a4fc4dbae93b3bccd",
    },
    {
      name: "MATICX",
      maxLTV: "60%",
      liquidationThreshold: "85%",
      houseOfReserveContract: "0x102dda5f4621a08dafD327f29f9c815f851846dC",
      assetContract: "0xfa68fb4628dff1028cfec22b4162fccd0d45efb6",
    },
    {
      name: "WMATIC",
      maxLTV: "70%",
      liquidationThreshold: "85%",
      houseOfReserveContract: "0xdB9Dd25660240415d95144C6CE4f21f00Edf8168",
      assetContract: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    },
    {
      name: "WBTC",
      maxLTV: "70%",
      liquidationThreshold: "85%",
      houseOfReserveContract: "0x983A0eC44bf1BB11592a8bD5F91f05adE4F44D81",
      assetContract: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    },
  ],
  8453: [
    {
      name: "WETH",
      maxLTV: "80%",
      liquidationThreshold: "85%",
      houseOfReserveContract: "0xfF69E183A863151B4152055974aa648b3165014D",
      assetContract: "0x4200000000000000000000000000000000000006",
    },
    {
      name: "cbETH",
      maxLTV: "80%",
      liquidationThreshold: "85%",
      houseOfReserveContract: "0x5c4a154690AE52844F151bcF3aA44885db3c8A58",
      assetContract: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
    },
  ],
};

const DepositTable: React.FC = () => {
  const chainId = useChainId();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);
  const [selectedContract, setSelectedContract] = useState<string | null>(null);
  const [selectedAssetContract, setSelectedAssetContract] = useState<string>(""); // Provide a default value for selectedAssetContract

  // Get the assets for the current chain
  const chainAssets = assets[chainId] || [];

  const { address: walletAddress } = useAccountAddress();
  const [, setBalances] = useState<Record<string, string>>({});

  const handleBalanceChange = useCallback((tokenAddress: Address, balance: string) => {
    setBalances(prevBalances => ({ ...prevBalances, [tokenAddress]: balance }));
  }, []);

  const handleOpenModal = (assetName: string, houseOfReserveContract: string, assetContract: string) => {
    setSelectedAsset(assetName);
    setSelectedContract(houseOfReserveContract);
    setSelectedAssetContract(assetContract);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedAsset(null);
    setSelectedContract(null);
    setSelectedAssetContract("");
    setIsModalOpen(false);
  };

  const handleOpenWithdrawModal = (assetName: string, houseOfReserveContract: string, assetContract: string) => {
    setSelectedAsset(assetName);
    setSelectedContract(houseOfReserveContract);
    setSelectedAssetContract(assetContract);
    setIsWithdrawModalOpen(true);
  };

  const handleCloseWithdrawModal = () => {
    setSelectedAsset(null);
    setSelectedContract(null);
    setSelectedAssetContract("");
    setIsWithdrawModalOpen(false);
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="text-center">
            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Assets
            </th>
            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Balance
            </th>
            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Max LTV{" "}
              <div
                className="tooltip tooltip-primary"
                data-tip="Maximum Loan-To-Value ratio, which tells you how much you can leverage your asset's worth."
              >
                <InformationCircleIcon className="h-5 w-5 inline" />
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Liquidation Threshold{" "}
              <div
                className="tooltip tooltip-primary"
                data-tip="When the value of an asset falls below the Liquidation Threshold, it indicates that the asset's value has decreased significantly and may no longer be sufficient to cover the borrowed funds. In such cases, the lending platform may initiate a liquidation process to sell the borrower's assets and recover the borrowed amount."
              >
                <InformationCircleIcon className="h-5 w-5 inline" />
              </div>
            </th>

            <th scope="col" className="pl-32 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-center">
          {chainAssets.map(asset => (
            <tr key={asset.name}>
              <td className="px-6 py-4">
                <p className="text-sm font-medium text-gray-900">{asset.name}</p>
              </td>
              <td className="dark:text-primary px-6 py-4">
                <BalanceOf
                  tokenAddress={asset.assetContract as Address}
                  walletAddress={walletAddress as Address}
                  onBalanceChange={handleBalanceChange}
                />
              </td>
              <td className="px-6 py-4">
                <p className="text-sm text-gray-900">{asset.maxLTV}</p>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                  <p className="text-sm text-gray-900">{asset.liquidationThreshold}</p>
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  className="text-sm text-accent dark:text-white btn bg-base-100 hover:bg-primary hover:text-white"
                  onClick={() => handleOpenModal(asset.name, asset.houseOfReserveContract, asset.assetContract)}
                >
                  Deposit
                </button>
                <button
                  className="text-sm text-accent dark:text-white btn bg-base-100 ml-2 hover:bg-primary hover:text-white"
                  onClick={() => handleOpenWithdrawModal(asset.name, asset.houseOfReserveContract, asset.assetContract)}
                >
                  Withdraw
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && selectedAsset && selectedContract && (
        <DepositModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          assetName={selectedAsset}
          houseOfReserveContract={selectedContract}
          assetContract={selectedAssetContract}
          deposit={amount => {
            // handle deposit logic here
            console.log(`Depositing ${amount} ${selectedAsset}`);
          }}
        />
      )}
      {isWithdrawModalOpen && selectedAsset && selectedContract && (
        <WithdrawModal
          isOpen={isWithdrawModalOpen}
          onClose={handleCloseWithdrawModal}
          assetName={selectedAsset}
          houseOfReserveContract={selectedContract}
          assetContract={selectedAssetContract}
        />
      )}
    </div>
  );
};

export default DepositTable;