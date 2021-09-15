import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { SafeArea } from "../../../components/utility/safe-area.component"
import { ListItem } from "../components/list-item.component"

import { HomeBackground } from "../components/home.styles";

import { MarketDataContext } from "../../../services/coin/coin.context";
import { colors } from "../../../infrastructure/theme/colors";

const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
      </View>
    <View style={styles.divider} />
  </>
)

export const MarketScreen = ({ navigation }) => {
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
            onPress={() => navigation.navigate("MarketDetails", {
              currentCoin: item
            })}
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
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text.secondary,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.text.primary,
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