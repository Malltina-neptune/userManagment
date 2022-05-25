import {View, FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {Card} from '../../components/Card';

const HomeScreen = () => {
  const [users, setUsers] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log(currentPage, 'currentPage');
    fetch(`https://randomuser.me/api/?page=${currentPage}&results=20&seed=abc`)
      .then(response => response.json())
      .then(json => setUsers([...users, ...json.results]));
  }, [currentPage]);

  const renderItem = useCallback(
    ({item}) => (
      <Card
        fistName={item.name.first}
        lastName={item.name.last}
        email={item.email}
        image={item.picture.medium}
      />
    ),
    [],
  );
  const keyExtractor = useCallback((item, index) => index.toString(), []);

  const loadMore = useCallback(() => {
    setCurrentPage(currentPage + 1);
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
