import React from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function Search({searchValue, setSearchValue, onClear}) {
  return (
    <View style={styles.mainView}>
      <Image style={styles.imgStyle} source={require('../assets/search.png')} />
      <TextInput
        placeholder="Type Here..."
        placeholderTextColor="lightgray"
        style={styles.input}
        value={searchValue}
        onChangeText={setSearchValue}
      />
      <TouchableOpacity onPress={onClear}>
        <Image
          style={styles.closeButton}
          source={require('../assets/close.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 17,
  },
  imgStyle: {
    height: 18,
    width: 18,
    marginRight: 4,
  },
  mainView: {
    width: '100%',
    height: 45,
    borderRadius: 10,
    backgroundColor: '#74858C',
    flexDirection: 'row',
    paddingVertical: 2,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
});
export default Search;
