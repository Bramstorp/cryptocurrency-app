import React, { useState, useEffect } from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { Text, Dimensions } from "react-native";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
} from "@rainbow-me/animated-charts";
import { useSharedValue } from "react-native-reanimated";

const { width: SIZE } = Dimensions.get("window");

import {
  CryptoTitle,
  CryptoSupTitle,
  CryptoLogo,
  CryptoWrapper,
  LeftWrapper,
  RightWrapper,
  PriceChangePercentage,
  CryptoSubWrapper,
  ChartWrapper,
  ChartTitleWrapper,
  ChartTitle,
  ChartLineWrapper,
} from "../components/market-details.styles";

import { Ionicons } from "@expo/vector-icons";

export const CryptoValue = ({ currentCoin }) => {
  const latestCurrentPrice = useSharedValue(currentCoin.current_price);
  const [chartReady, setChartReady] = useState(false);

  const priceChangeColor =
    currentCoin.price_change_percentage_7d_in_currency > 0
      ? "#34C759"
      : "#FF3B30";
  const priceChange = currentCoin.price_change_percentage_7d_in_currency > 0;

  useEffect(() => {
    latestCurrentPrice.value = currentCoin.current_price;

    setTimeout(() => {
      setChartReady(true);
    }, 0);
  }, [currentCoin.current_price]);

  const formatUSD = (value) => {
    "worklet";
    if (value === "") {
      const formattedValue = `$${latestCurrentPrice.value.toLocaleString(
        "en-US",
        { currency: "USD" }
      )}`;
      return formattedValue;
    }

    const formattedValue = `$${parseFloat(value)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
    return formattedValue;
  };

  if (currentCoin?.sparkline_in_7d.price.length === 0) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeArea>
      <ChartPathProvider
        data={{
          points: currentCoin?.sparkline_in_7d.price,
          smoothingStrategy: "bezier",
        }}
      >
        <CryptoWrapper>
          <LeftWrapper>
            <CryptoLogo source={{ uri: currentCoin.image }} />
            <CryptoTitle>{currentCoin.name}</CryptoTitle>
            <CryptoSupTitle>
              ({currentCoin.symbol.toUpperCase()})
            </CryptoSupTitle>
          </LeftWrapper>
          <RightWrapper>
            <ChartTitle
              format={formatUSD}
              style={{ color: priceChangeColor }}
            />
          </RightWrapper>
        </CryptoWrapper>
        <CryptoSubWrapper>
          <PriceChangePercentage style={{ color: priceChangeColor }}>
            {currentCoin.price_change_percentage_7d_in_currency.toFixed(2)}%{" "}
            {priceChange ? (
              <Ionicons name={"caret-up"} size={15} />
            ) : (
              <Ionicons name={"caret-down"} size={15} />
            )}
          </PriceChangePercentage>
        </CryptoSubWrapper>
        <ChartWrapper>
          {chartReady ? (
            <ChartLineWrapper>
              <ChartPath
                height={SIZE / 2}
                stroke={priceChangeColor}
                width={SIZE}
              />
              <ChartDot style={{ backgroundColor: "white" }} />
            </ChartLineWrapper>
          ) : null}
        </ChartWrapper>
      </ChartPathProvider>
    </SafeArea>
  );
};
