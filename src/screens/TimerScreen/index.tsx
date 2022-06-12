import React from 'react';

import { StyleSheet } from 'react-native';

import { Text, View} from '../../components/Themed';
import { RootStackScreenProps } from '../../../types';
import { TextInput } from 'react-native-paper';
import { MinuteButton } from '../../components/MinuteButton';
import { RFValue } from 'react-native-responsive-fontsize';


export const TimerScreen = ({ navigation, route }: RootStackScreenProps<'TimerScreen'>) => {

  const { title } = route.params ?? {}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.containerMinutes}>
        {[5, 10, 25, 45, 60].map((item, idx)=> {
          return <MinuteButton minutes={item} key={idx}/>
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
    fontSize: RFValue(20),
    fontWeight: 'bold',
    marginBottom: 16
  },
  containerMinutes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});
