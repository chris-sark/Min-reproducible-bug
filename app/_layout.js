import React, { useState } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';

const TestRefreshControl = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <View style={{ flex: 1, paddingTop: 150 }}>
      <FlatList
        data={[{ key: '1' }, { key: '2' }, { key: '3' }]}
        renderItem={({ item }) => <View style={{ height: 100, backgroundColor: 'lightgray', margin: 10 }} />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="blue"
            progressViewOffset={50}
          />
        }
      />
    </View>
  );
};

export default TestRefreshControl;