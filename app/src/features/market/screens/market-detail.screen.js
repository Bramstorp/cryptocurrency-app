import React, { useState } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";                                // expo app ikoner
import { TouchableOpacity, Linking, Button } from 'react-native'

import { Spacer } from "../../../components/spacer/spacer.component"

import { CryptoValue } from "../components/crypto-value.component"
import { colors } from "../../../infrastructure/theme/colors";

// Market detaljer skærm 
export const MarketDetailScreen = ({ route, navigation }) => {
  // henter props ud
  const { currentCoin } = route.params;

  return (
    <SafeArea>
      <Spacer size="large">
        <TouchableOpacity style={{ paddingLeft: 20 }} onPress={() => navigation.goBack()}>
          <Ionicons name={"md-backspace"} size={25} color={colors.brand.primary} />
        </TouchableOpacity>        
      </Spacer>
      <CryptoValue currentCoin={currentCoin} />
      <Spacer size="large">
        <Button title="Open Coin" onPress={ ()=>{ Linking.openURL(`https://coinmarketcap.com/currencies/${currentCoin.name}`)}} />
      </Spacer>
    </SafeArea>
  );
};
