import React, { useState } from 'react';

import { StyleSheet } from 'react-native';

import { Text, View} from '../../components/Themed';
import { RootStackScreenProps } from '../../../types';
import { MinuteButton } from '../../components/MinuteButton';
import { RFValue } from 'react-native-responsive-fontsize';
import { Countdown } from '../../components/Countdown';

import { useKeepAwake } from 'expo-keep-awake';

export const TimerScreen = ({ navigation, route }: RootStackScreenProps<'TimerScreen'>) => {

  useKeepAwake()

  const { title } = route.params ?? {}

  const [minutes, setMinutes] = useState(0);

  const [isPaused, setIsPaused] = useState(true);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>{"Enfocar mi tiempo en:"}</Text>

      <Text style={styles.subTitle}>{title}</Text>

      <Countdown minutes={minutes} isPaused={isPaused}/>

      <View style={styles.containerMinutes}>
        {[10, 15, 30, 45, 55].map((item, idx)=> {
          return (
            <View style={{marginHorizontal: 2}}  key={idx}>
              <MinuteButton minutes={item} setMinutes={setMinutes}/>
            </View>
          )
        })}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    padding: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: RFValue(28),
    fontWeight: 'bold',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: RFValue(20),
  },
  containerMinutes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 16,
  }
});
