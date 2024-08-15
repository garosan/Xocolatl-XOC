"use client";

import React, { useState } from "react";
import AssetsToBorrow from "./components/AssetsToBorrow";
import AssetsToSupply from "./components/AssetsToSupply";
import ProfileStats from "./components/ProfileStats";
import YourBorrows from "./components/YourBorrows";
import YourSupplies from "./components/YourSupplies";
import useAccountAddress from "@/hooks/useAccount";
// Importa el hook de la dirección
import useGetUserAccountData from "@/hooks/useGetUserAccountData";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importa el hook de datos del usuario

const Lending = () => {
  const [isYourSuppliesVisible, setIsYourSuppliesVisible] = useState(true);
  const [isAssetsToSupplyVisible, setIsAssetsToSupplyVisible] = useState(true);
  const [isYourBorrowsVissible, setIsYourBorrowsVissible] = useState(true);
  const [isAssetsToBorrowVisible, setIsAssetsToBorrowVisible] = useState(true);

  const [allBalancesZero, setAllBalancesZero] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  const [suppliesTotalBalance, setSuppliesTotalBalance] = useState(0);
  const [borrowsTotalBalance, setBorrowsTotalBalance] = useState(0);

  const { address } = useAccountAddress(); // Obtén la dirección del usuario
  const { userAccountData, isLoading, isError } = useGetUserAccountData(address || ""); // Obtén los datos del usuario

  const refreshComponents = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  // Calculate Net Worth balance
  const netWorth = suppliesTotalBalance - borrowsTotalBalance;

  return (
    <div className="flex flex-col w-4/5 m-auto gap-4">
      <div className="lending-header flex bg-white rounded-xl py-6 px-8 justify-between items-end">
        {isLoading ? (
          <div>Loading...</div> // Mostrar un mensaje o componente de carga mientras se obtienen los datos
        ) : isError ? (
          <div>Error loading data</div> // Mostrar un mensaje de error si hay un problema al obtener los datos
        ) : (
          <ProfileStats
            balance={netWorth}
            netAPY={userAccountData?.ltv || 0} // Usa datos del hook de usuario para APY o cualquier otro campo relevante
            healthFactor={userAccountData?.healthFactor || 0} // Usa datos del hook de usuario para el health factor
          />
        )}
        <button onClick={refreshComponents} className="primary-btn h-fit w-fit">
          Refresh all data
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          {/* Your Supplies */}
          <div className="table-background rounded-xl p-8 flex flex-col">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="general-text-color">Your supplies</h1>
              </div>
              <button
                onClick={() => setIsYourSuppliesVisible(prev => !prev)}
                className="general-text-color focus:outline-none"
              >
                {isYourSuppliesVisible ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </button>
            </div>
            {isYourSuppliesVisible && (
              <YourSupplies
                setAllBalancesZero={setAllBalancesZero}
                setSuppliesTotalBalance={setSuppliesTotalBalance}
                key={refreshKey}
              />
            )}
          </div>

          {/* Assets to Supply */}
          <div className="table-background rounded-xl p-8 flex flex-col">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="general-text-color">Assets to supply</h1>
                {isAssetsToSupplyVisible && <p className="subtitles-gray-color">Select the asset to supply.</p>}
              </div>
              <button
                onClick={() => setIsAssetsToSupplyVisible(prev => !prev)}
                className="general-text-color focus:outline-none"
              >
                {isAssetsToSupplyVisible ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </button>
            </div>
            {isAssetsToSupplyVisible && <AssetsToSupply key={refreshKey} />}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* Your Borrows */}
          <div className="table-background rounded-xl p-8 flex flex-col">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="general-text-color">Your borrows</h1>
              </div>
              <button
                onClick={() => setIsYourBorrowsVissible(prev => !prev)}
                className="general-text-color focus:outline-none"
              >
                {isYourBorrowsVissible ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </button>
            </div>
            {isYourBorrowsVissible && <YourBorrows setBorrowsTotalBalance={setBorrowsTotalBalance} key={refreshKey} />}
          </div>
          {/* Assets to Borrow */}
          <div className="table-background rounded-xl p-8 flex flex-col">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="general-text-color">Assets to borrow</h1>
                {isAssetsToBorrowVisible && !allBalancesZero && (
                  <p className="subtitles-gray-color">Select the asset to borrow.</p>
                )}
                {allBalancesZero && (
                  <p className="subtitles-gray-color">You must supply assets to make borrow transactions.</p>
                )}
              </div>
              {!allBalancesZero && (
                <button
                  onClick={() => setIsAssetsToBorrowVisible(prev => !prev)}
                  className="general-text-color focus:outline-none"
                >
                  {isAssetsToBorrowVisible ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                  )}
                </button>
              )}
            </div>
            {isAssetsToBorrowVisible && !allBalancesZero && <AssetsToBorrow key={refreshKey} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lending;