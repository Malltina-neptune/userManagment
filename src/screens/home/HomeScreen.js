import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';

import {Card} from '../../components/Card';
import {Divider} from '../../components/Divider';
import RenderLoader from '../../components/RenderLoader';
import HomeHeader from '../../components/HomeHeader';


const HomeScreen = () => {
  const [users, setUsers] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?page=${currentPage}&results=20&seed=abc`)
      .then(response => response.json())
      .then(json => setUsers([...users, ...json.results]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const renderItem = useCallback(
    ({item, seperators}) => (
      <Card
        firstName={item.name.first}
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
    <SafeAreaView style={styles.flexGrow}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReachedThreshold={0.1}
        onEndReached={loadMore}

        ItemSeparatorComponent={Divider}

        ListHeaderComponent={HomeHeader}
        ListFooterComponent={RenderLoader}

      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  flexGrow: {
    flex: 1,
    marginTop: -1,
  },
});
export default HomeScreen;
