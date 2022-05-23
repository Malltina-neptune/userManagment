import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';

const HomeScreen = () => {
  const [users, setUsers] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log(currentPage, 'currentPage');
    fetch(`https://randomuser.me/api/?results=${currentPage}`)
      .then(response => response.json())
      .then(json => setUsers(json.results));
  }, [currentPage]);

  const renderItem = useCallback(
    ({item}) => <Text>{item.name.first}</Text>,
    [],
  );
  const keyExtractor = useCallback((item, index) => index.toString(), []);

  const loadMore = useCallback(() => {
    setCurrentPage(currentPage + 10);
  }, [currentPage]);

  return (
    <View style={styles.main}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReachedThreshold={0.1}
        onEndReached={loadMore}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
export default HomeScreen;
