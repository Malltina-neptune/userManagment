import {View, Text, FlatList, TextInput} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';

const HomeScreen = () => {
  const [users, setUsers] = useState('');
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(response => response.json())
      .then(json => setUsers(json.results));
  }, []);

  const keyExtractor = useCallback((item, index) => index.toString(), []);

  const renderItem = useCallback(
    ({item}) => <Text>{item.name.first}</Text>,
    [],
  );

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;
