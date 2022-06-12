import React, { useState } from 'react';

import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View} from 'react-native';
import { RootStackScreenProps } from '../../../types';
import { MinuteButton } from '../../components/MinuteButton';
import { RFValue } from 'react-native-responsive-fontsize';
import { Countdown } from '../../components/Countdown';

import theme from '../../constants/Colors'

import { useKeepAwake } from 'expo-keep-awake';
import { ProgressBar } from 'react-native-paper';

export const TimerScreen = ({ route }: RootStackScreenProps<'TimerScreen'>) => {

  useKeepAwake()

  const { title } = route.params ?? {}

  const [minutes, setMinutes] = useState<number>(0);

  const [isPaused, setIsPaused] = useState<boolean>(true);

  const [progress, setProgress] = useState(1);

  const onProgress = (progress: number) => {
    setProgress(progress);
  };

  const onEnd = () => {
    //vibrate();
    setMinutes(0);
    setProgress(1);
    setIsPaused(true);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>{"Enfocar mi tiempo en:"}</Text>

      <Text style={styles.subTitle}>{title}</Text>

      <Countdown minutes={minutes} isPaused={isPaused} onProgress={onProgress} onEnd={onEnd}/>

      <ProgressBar
          progress={progress}
          color={theme.dark.foreground}
          style={{ height: 4, marginBottom: 16 }}
        />

      <View style={styles.containerMinutes}>
        {[1, 15, 30, 45, 55].map((item, idx)=> {
          return (
            <View style={{margin: 6}}  key={idx}>
              <MinuteButton minutes={item} setMinutes={setMinutes} disabled={!isPaused}/>
            </View>
          )
        })}
      </View>

      <TouchableOpacity style={{ alignItems: 'center', borderRadius: 8 }} disabled={!minutes || !isPaused} onPress={() => setIsPaused(false)}>
        <View style={[styles.button, (!minutes || !isPaused) && {opacity: 0}]}>
          <Text style={{ color: theme.dark.primaryText, fontWeight: 'bold'}}>
            Empezar
          </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    padding: 16,
    backgroundColor: theme.dark.background
  },
  title: {
    textAlign: 'center',
    fontSize: RFValue(28),
    fontWeight: 'bold',
    color: theme.dark.primaryText
  },
  subTitle: {
    textAlign: 'center',
    fontSize: RFValue(20),
    color: theme.dark.primaryText
  },
  containerMinutes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  button: {
    height: 100,
    width: 100,
    marginVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: theme.dark.primaryText,
    borderWidth: 5
  }
});
