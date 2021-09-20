import React, { createContext, useState, useEffect } from "react";

import { getMarketData } from './coin';

export const MarketDataContext = createContext();


export const MarketDataContextProvider = ({ children }) => {
    
    // state for vores api data
    const [data, setData] = useState([]);

    // kører når appen blive booted up
    useEffect(() => {
      // async henter af vores data
      const fetchMarketData = async () => {
        // afventer svar fra vores api og sætter den til marketData
        const marketData = await getMarketData();
        // her sætter vi vores data stat til data fundet i vores api
        setData(marketData);
      }
      
      // kør af vores function
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