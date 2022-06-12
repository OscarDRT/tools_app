import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Text, View } from "./Themed";

const {width, height} = Dimensions.get('screen')

const minutesToMillis = (min: number) => min * 1000 * 60;
const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

export type CountdownProps = {
  minutes: number
  isPaused: boolean
}

export const Countdown = ({ minutes, isPaused }: CountdownProps) => {

  const interval: { current: NodeJS.Timeout | null } = useRef(null);

  const [millis, setMillis] = useState<number | null>(null);

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current as NodeJS.Timeout);
        console.log('TERMINE')
        return time;
      }
      const timeLeft = time as number - 1000;
      return timeLeft;
    });
  };


  const minute = Math.floor(millis as number / 1000 / 60) % 60;
  const seconds = Math.floor(millis as number / 1000) % 60;

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
    backgroundColor: 'red',
    width: width,
    height: (height * 20) / 100,
    alignSelf: 'center',
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: RFValue(100),
    fontWeight: 'bold',
    color: 'white',
  }
})