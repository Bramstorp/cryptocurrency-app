import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { colors } from "../../../infrastructure/theme/colors";

export const ListHeader = () => (
    <>
      <View style={styles.titleWrapper}>
          <Text style={styles.largeTitle}>Markets</Text>
        </View>
      <View style={styles.divider} />
    </>
  )



const styles = StyleSheet.create({
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
});