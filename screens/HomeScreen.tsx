import * as React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import AlbumCategory from "../components/AlbumCategory";
import albumCategories from "../data/albumCategories";

export default function HomeScreen() {
  return (
      <View style={styles.container}>
        <FlatList
            data={albumCategories}
            renderItem={({ item }) => (
                <AlbumCategory
                    title={item.title}
                    albums={item.albums}
                />
            )}
            keyExtractor={(item) => item.id}
            style={styles.albumCategory}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  albumCategory: {
    marginBottom: 75,
  },
});
