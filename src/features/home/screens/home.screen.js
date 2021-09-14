import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { SafeArea } from "../../../components/utility/safe-area.component"
import { ListItem } from "../components/listItem"

import { Balance, HomeBackground, BalanceText, BalanceProcent } from "../components/home.styles";

import { MarketDataContext } from "../../../services/coin/coin.context";

const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
      </View>
    <View style={styles.divider} />
  </>
)

export const HomeScreen = ({ navigation }) => {
  const { data } = useContext(MarketDataContext);

  return (
    <SafeArea>
      <HomeBackground>
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
            onPress={() => openModal(item)}
          />
        )}
        ListHeaderComponent={<ListHeader />}
      />
      </HomeBackground>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16,
  },
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});