import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';

const HomeScreen = () => {
  const [users, setUsers] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentResult, setCurrentResult] = useState(20);

  useEffect(() => {
    console.log(currentPage, 'currentPage');
    console.log(currentResult, 'currentResult');
    fetch(
      `https://randomuser.me/api/?page=${currentPage}&results=${currentResult}&seed=abc`,
    )
      .then(response => response.json())
      .then(json => setUsers(json.results));
  }, [currentPage, currentResult]);

  const renderItem = useCallback(
    ({item}) => <Text>{item.name.first}</Text>,
    [],
  );
  const keyExtractor = useCallback((item, index) => index.toString(), []);

  const loadMore = useCallback(() => {
    setCurrentPage(currentPage + 1);
    setCurrentResult(currentResult + 20);
  }, [currentPage, currentResult]);

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
