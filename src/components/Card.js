import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Card = ({fistName, lastName, email, image}) => {
  return (
    <View>
      <View style={styles.main}>
        <View>
          <Image source={{uri: image}} style={styles.img} />
        </View>
        <View>
          <View style={styles.name}>
            <Text style={styles.txt}>{fistName}</Text>
            <Text style={styles.txt}> {lastName} </Text>
          </View>
          <View>
            <Text>{email}</Text>
          </View>
        </View>
        <View style={styles.icon}>
          <FontAwesome name="angle-right" size={30} />
        </View>
      </View>
      <View backgroundColor={'black'} style={styles.divider} />
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
  divider: {
    borderBottomColor: 'gray',
    borderWidth: 0.5,
    width: '80%',
    position: 'absolute',
    right: 0,
  },
  img: {
    height: 70,
    width: 70,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 70 / 2,
    margin: 10,
    resizeMode: 'contain',
  },
  name: {
    flexDirection: 'row',
  },
  icon: {
    position: 'absolute',
    alignItems: 'center',
    right: 30,
  },
  txt: {
    color: 'black',
    fontSize: 18,
  },
});
