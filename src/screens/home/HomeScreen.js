import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';

import {Card} from '../../components/Card';
import {Divider} from '../../components/Divider';
import RenderLoader from '../../components/RenderLoader';
import HomeHeader from '../../components/HomeHeader';

const HomeScreen = () => {
  const [users, setUsers] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`https://randomuser.me/api/?page=${currentPage}&results=20`)
      .then(response => response.json())
      .then(json => {
        setFilterData([...filterData, ...json.results]);
        setUsers([...users, ...json.results]);
      })
      .catch(error => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const renderItem = useCallback(
    ({item}) => (
      <Card
        firstName={item.name.first}
        lastName={item.name.last}
        email={item.email}
        image={item.picture.medium}
      />
    ),
    [],
  );
  const keyExtractor = useCallback(item => item.login.uuid, []);

  const loadMore = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  const searchFilter = param => {
    if (param) {
      const newData = users.filter(item => {
        const items = item.name.first
          ? item.name.first.toUpperCase()
          : ''.toUpperCase();

        const text = param.toUpperCase();
        return items.indexOf(text) > -1;
      });
      setFilterData(newData);
      setSearch(param);
    } else {
      setFilterData(users);
      setSearch(param);
    }
  };

  return (
    <SafeAreaView style={styles.flexGrow}>
      <FlatList
        data={filterData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReachedThreshold={0.1}
        onEndReached={loadMore}
        ItemSeparatorComponent={Divider}
        ListHeaderComponent={
          <HomeHeader
            searchValue={search}
            setSearchValue={param => searchFilter(param)}
            onClear={() => setSearch('')}
          />
        }
        ListFooterComponent={<RenderLoader />}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  flexGrow: {
    flex: 1,
  },
});
export default HomeScreen;
