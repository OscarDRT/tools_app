import React from "react";
import { TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { ForegroundView, Text, useThemeColor, View, ViewProps } from "./Themed";


const { width } = Dimensions.get('screen')

const size = (width * 20) / 100

const colorText = {
  light: Colors.light.secundaryText,
  dark: Colors.dark.secundaryText
}

export type MinuteButtonProps = {minutes: string}

export const MinuteButton = ({ minutes = 0}) => {

  const theme = useColorScheme();

  let textColor = colorText[theme]

  return (
    <TouchableOpacity activeOpacity={0.8}>
      <ForegroundView style={styles.circle}>
        <Text style={[styles.text, {color: textColor}]}>{minutes}</Text>
      </ForegroundView>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  circle: {
    height: size,
    width: size,
    borderRadius: size,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: RFValue(32)
  }
})