import React, { useContext } from "react";
import { Text } from 'react-native';

import { SafeArea } from "../../../components/utility/safe-area.component"

import { Chart } from "../components/cryptoChart";

import {
  CryptoTitle,
  CryptoSupTitle,
  CryptoLogo,
  CryptoWrapper,
  LeftWrapper,
  RightWrapper,
  PriceChangePercentage,
  CryptoPrice,
  CryptoSubWrapper,
  CryptoDays
} from "../components/market-details.styles";

export const MarketDetailScreen = ({ route }) => {

  const { currentCoin } = route.params;
  console.log(currentCoin)

  const priceChangeColor = currentCoin.price_change_percentage_7d_in_currency > 0 ? '#34C759' : '#FF3B30';

  return (
    <SafeArea>
        <CryptoWrapper>
            <LeftWrapper>
                <CryptoLogo source={{ uri: currentCoin.image }} />
                <CryptoTitle>{currentCoin.name}</CryptoTitle>
                <CryptoSupTitle>({currentCoin.symbol.toUpperCase()})</CryptoSupTitle>
            </LeftWrapper>
            <RightWrapper>
                <CryptoDays>7d</CryptoDays>
            </RightWrapper>
        </CryptoWrapper>
        <CryptoSubWrapper>
            <CryptoPrice>${currentCoin.current_price.toLocaleString('en-US', { currency: 'USD' })}</CryptoPrice>
            <PriceChangePercentage style={{color: priceChangeColor}}>{currentCoin.price_change_percentage_7d_in_currency.toFixed(2)}</PriceChangePercentage>
        </CryptoSubWrapper>
        <Chart
            currentPrice={currentCoin.current_price}
            logoUrl={currentCoin.image}
            name={currentCoin.name}
            symbol={currentCoin.symbol}
            priceChangePercentage7d={currentCoin.price_change_percentage_7d_in_currency}
            sparkline={currentCoin?.sparkline_in_7d.price}
          />
    </SafeArea>
  );
};
