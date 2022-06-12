import React from 'react';

import { StyleSheet } from 'react-native';

import { Text, View} from '../../components/Themed';
import { RootStackScreenProps } from '../../../types';
import { TextInput } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';


export const HomeScreen = ({ navigation }: RootStackScreenProps<'HomeScreen'>) => {

  const [text, setText] = React.useState("");

  const goToTimerScreen = ()=> {
    console.log(text)
    navigation.navigate('TimerScreen', {title: text})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿En qué deseas enfocar tu tiempo?</Text>
        <TextInput onSubmitEditing={goToTimerScreen} autoFocus value={text} onChangeText={(v) => setText(v)}/>
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
});
