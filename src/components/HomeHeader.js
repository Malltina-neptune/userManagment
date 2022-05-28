import {View, Image, StyleSheet, Text} from 'react-native';
import React from 'react';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
          resizeMode="contain"
        />
        <View style={styles.userWrapper}>
          <Image
            style={styles.user}
            source={require('../assets/person.png')}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.msgWrapper}>
        <Text style={styles.welcomeMsg}>Hello Emily 👋</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#001F2D',
    padding: 14,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 90,
    height: 25,
  },
  userWrapper: {
    width: 45,
    height: 45,
  },
  user: {
    width: '100%',
    height: '100%',
  },
  msgWrapper: {
    marginTop: 12,
  },
  welcomeMsg: {
    color: 'white',
    fontSize: 16,
  },
});
export default HomeHeader;
