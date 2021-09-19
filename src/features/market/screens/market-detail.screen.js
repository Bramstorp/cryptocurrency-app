import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { CryptoValue } from "../components/crypto-value.component"

// Market detaljer skærm 
export const MarketDetailScreen = ({ route }) => {
  // henter props ud
  const { currentCoin } = route.params;

  return (
    <SafeArea>
      <CryptoValue currentCoin={currentCoin} />
    </SafeArea>
  );
};
