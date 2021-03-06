import React from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
        <FontAwesome name="close" size={26} color="#fff" />
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
