import React from 'react';

import { StyleSheet } from 'react-native';

import { Text, View } from 'react-native';
import { RootStackScreenProps } from '../../../types';
import { TextInput } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../constants/Colors'


export const HomeScreen = ({ navigation }: RootStackScreenProps<'HomeScreen'>) => {

  const [text, setText] = React.useState("");

  const goToTimerScreen = ()=> {
    console.log(text)
    navigation.navigate('TimerScreen', {title: text})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿En qué deseas enfocar tu tiempo?</Text>
        <TextInput activeUnderlineColor={theme.dark.background} underlineColor={theme.dark.background} selectionColor={theme.dark.background} onSubmitEditing={goToTimerScreen} autoFocus value={text} onChangeText={(v) => setText(v)}/>
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
    fontSize: RFValue(20),
    fontWeight: 'bold',
    marginBottom: 16,
    color: theme.dark.primaryText
  },
});
