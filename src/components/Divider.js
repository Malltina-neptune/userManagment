import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Divider = () => {
  return <View backgroundColor={'black'} style={styles.divider} />;
};
const styles = StyleSheet.create({
  divider: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    width: '80%',
    position: 'absolute',
    right: 0,
  },
});
