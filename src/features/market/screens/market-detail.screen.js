import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { CryptoValue } from "../components/crypto-value.component"

export const MarketDetailScreen = ({ route }) => {
  const { currentCoin } = route.params;

  return (
    <SafeArea>
      <CryptoValue currentCoin={currentCoin} />
    </SafeArea>
  );
};
