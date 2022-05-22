import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';

const HomeScreen = () => {
  const [users, setUsers] = useState('');
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(response => response.json())
      .then(json => setUsers(json.results));
  }, []);

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => <Text>{item.name.first}</Text>}
      />
    </View>
  );
};

export default HomeScreen;
