import React, { useContext } from "react";
import { FlatList } from 'react-native';

import { SafeArea } from "../../../components/utility/safe-area.component"
import { ListItem } from "../components/list-item.component"
import { ListHeader } from "../components/list-header.component"

import { MarketDataContext } from "../../../services/coin/coin.context";

import { Container } from "../components/market.style"


export const MarketScreen = ({ navigation }) => {
  const { data } = useContext(MarketDataContext);

  return (
    <SafeArea>
      <Container>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <ListItem
              name={item.name}
              symbol={item.symbol}
              currentPrice={item.current_price}
              priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
              logoUrl={item.image}
              onPress={() => navigation.navigate("MarketDetails", {
                currentCoin: item
              })}
            />
          )}
          ListHeaderComponent={<ListHeader />}
        />
      </Container>
    </SafeArea>
  );
};