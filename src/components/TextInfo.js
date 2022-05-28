import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const TitleInfo = ({info}) => {
  return <Text style={styles.txt}>{info}</Text>;
};
export const EmailInfo = ({info}) => {
  return <Text>{info}</Text>;
};
const styles = StyleSheet.create({
  txt: {
    color: 'black',
    fontSize: 18,
    padding: 3,
  },
});
