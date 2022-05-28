import React from 'react';
import {StyleSheet, Image} from 'react-native';

export const UserImage = ({image}) => {
  return <Image source={{uri: image}} style={styles.img} />;
};
const styles = StyleSheet.create({
  img: {
    height: 70,
    width: 70,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 70 / 2,
    margin: 10,
    resizeMode: 'contain',
  },
});
