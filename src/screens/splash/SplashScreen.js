import React, {useRef} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
  const ref = useRef(null);

  const onAnimationFinish = () => {
    navigation.replace('home');
  };
  return (
    <View style={styles.root}>
      <LottieView
        ref={animation => {
          ref.current = animation;
        }}
        style={styles.lottieView}
        source={require('../../assets/splash.json')}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
      />
      <Image
        source={require('../../assets/logo.png')}
        style={styles.ImgGroup}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#001F2D',
  },
  lottieView: {
    width: '70%',
    height: '70%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  ImgGroup: {
    width: '70%',
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default SplashScreen;
