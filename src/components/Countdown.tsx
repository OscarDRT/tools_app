import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Text, View } from "./Themed";

import theme from '../constants/Colors'


const {width, height} = Dimensions.get('screen')

const minutesToMillis = (min: number) => min * 1000 * 60;
const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

export type CountdownProps = {
  minutes: number
  isPaused: boolean
  onProgress: (s: number) => void
  onEnd: () => void
}

export const Countdown = ({ minutes, isPaused, onProgress, onEnd }: CountdownProps) => {

  const interval: { current: NodeJS.Timeout | null } = useRef(null);

  const [millis, setMillis] = useState<number | null>(null);

  const minute = Math.floor(millis as number / 1000 / 60) % 60;

  const seconds = Math.floor(millis as number / 1000) % 60;

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current as NodeJS.Timeout);
        onEnd()
        console.log('TERMINE')
        return time;
      }
      const timeLeft = time as number - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    if (millis) {
      onProgress(millis / minutesToMillis(minutes));
    }
  }, [millis]);

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current as NodeJS.Timeout);
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current as NodeJS.Timeout);
  }, [isPaused]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {formatTime(minute)}:{formatTime(seconds)}
    </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.dark.background,
    width: width,
    height: (height * 20) / 100,
    alignSelf: 'center',
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: RFValue(100),
    fontWeight: 'bold',
    color: 'white',
  }
})