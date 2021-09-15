import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ActivityIndicator } from 'react-native'
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel} from '@rainbow-me/animated-charts';
import { useSharedValue } from 'react-native-reanimated';
import { colors } from "../../../infrastructure/theme/colors";

const { width: SIZE } = Dimensions.get('window');


export const Chart = ({ currentPrice, logoUrl, name, symbol, priceChangePercentage7d, sparkline }) => {
  const latestCurrentPrice = useSharedValue(currentPrice);
  const [chartReady, setChartReady] = useState(false);

  const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';

  useEffect(() => {
    latestCurrentPrice.value = currentPrice;

    setTimeout(() => {
      setChartReady(true);
    }, 0)

  }, [currentPrice])

  const formatUSD = value => {
    'worklet';
    if (value === '') {
      const formattedValue = `$${latestCurrentPrice.value.toLocaleString('en-US', { currency: 'USD' })}`
      return formattedValue;
    }

    const formattedValue =`$${parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
    return formattedValue;
  };

  if (sparkline.length === 0) {
    return <Text>Loading...</Text>
  }

  return (
    <ChartPathProvider data={{ points: sparkline, smoothingStrategy: 'bezier' }}>
      <View style={styles.chartWrapper}>
        { chartReady ?
        (<View style={styles.chartLineWrapper}>
          <ChartPath height={SIZE / 2} stroke={colors.brand.primary} width={SIZE} />
          <ChartDot style={{ backgroundColor: 'black' }} />
          </View>)
          :
          null
        }
          <View style={styles.titlesWrapper}>
          <View style={styles.lowerTitles}>
            <ChartYLabel
              format={formatUSD}
              style={styles.boldTitle}
            />
          </View>
        </View>
        
      </View>
    </ChartPathProvider>
  )
}

const styles = StyleSheet.create({
  chartWrapper: {
    marginVertical: 16
  },
  titlesWrapper: {
    marginHorizontal: 16,
    alignItems: 'center'
  },
  boldTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.secondary,
  },
  chartLineWrapper: {
    marginTop: 40,
  },
});
