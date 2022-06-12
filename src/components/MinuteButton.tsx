import React from "react";
import { TouchableOpacity, Dimensions, StyleSheet, View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../constants/Colors";

const { width } = Dimensions.get('screen')

const size = (width * 20) / 100

export type MinuteButtonProps = {
  minutes: number,
  setMinutes: (s: number)=> void
  disabled: boolean
}

export const MinuteButton = ({ minutes = 0, setMinutes, disabled }: MinuteButtonProps) => {

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={()=> setMinutes(minutes)} disabled={disabled} >
      <View style={[styles.circle, disabled && styles.circleDisabled]}>
        <Text style={[styles.text, disabled && styles.textDisabled]}>{minutes}</Text>
      </View>
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
    borderColor: theme.dark.primaryText,
    borderWidth: 2
  },
  circleDisabled: {
    borderColor: theme.dark.foreground
  },
  text: {
    fontSize: RFValue(32),
    color: theme.dark.primaryText
  },
  textDisabled: {
    color: theme.dark.foreground
  }
})