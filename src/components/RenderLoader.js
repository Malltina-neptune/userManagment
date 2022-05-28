import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

const RenderLoader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    marginVertical: 16,
    alignItems: 'center',
  },
});
export default RenderLoader;
