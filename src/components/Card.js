import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {UserImage} from './ImageInfo';
import {TitleInfo, EmailInfo} from './TextInfo';
import {ArrowIcon} from './Icon';

export const Card = ({firstName, lastName, email, image}) => {
  return (
    <View style={styles.main}>
      <UserImage image={image} />
      <View>
        <View style={styles.name}>
          <TitleInfo info={firstName} />
          <TitleInfo info={lastName} />
        </View>
        <View>
          <EmailInfo info={email} />
        </View>
      </View>
      <TouchableOpacity style={styles.icon}>
        <ArrowIcon />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    height: 90,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  name: {
    flexDirection: 'row',
  },
  icon: {
    position: 'absolute',
    alignItems: 'center',
    right: 30,
  },
});
