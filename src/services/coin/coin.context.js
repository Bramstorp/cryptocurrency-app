import React, { createContext, useState, useEffect } from "react";

import { getMarketData } from './coin';

export const MarketDataContext = createContext();


export const MarketDataContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchMarketData = async () => {
        const marketData = await getMarketData();
        setData(marketData);
      }
  
      fetchMarketData();
    }, [])

  return (
    <MarketDataContext.Provider
      value={{
        data
      }}
    >
      {children}
    </MarketDataContext.Provider>
  );
};