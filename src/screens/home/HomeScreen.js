import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';

import {Card} from '../../components/Card';
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
    <SafeAreaView style={styles.flexGrow}>
      <View style={styles.flexGrow}>
        <View style={styles.cardZIndx}>
          <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            onEndReachedThreshold={0.1}
            onEndReached={loadMore}
            ListHeaderComponent={HomeHeader}
            ListFooterComponent={RenderLoader}
          />
        </View>

        <View style={styles.userBack}>
          <View style={styles.userTopBack} />
          <View style={styles.userBottomBack} />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  flexGrow: {
    flex: 1,
  },
  cardZIndx: {
    zIndex: 0,
  },
  userBack: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  userTopBack: {
    height: 110,
    backgroundColor: '#001F2D',
  },
  userBottomBack: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default HomeScreen;
