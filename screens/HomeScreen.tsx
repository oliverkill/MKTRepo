import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AlbumCategory from "../components/AlbumCategory";

const albumCategory = {
  id: '1',
  title: 'dummy data',
  albums: [
    {
      id: '1',
      imageUri: 'https://images.unsplash.com/photo-1576086446116-dc36b03c4fec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      artistsHeadLine: 'artistid 1',
    },
    {
      id: '2',
      imageUri: 'https://images.unsplash.com/photo-1576086446116-dc36b03c4fec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      artistsHeadLine: 'artistid 2',
    },
    {
      id: '3',
      imageUri: 'https://images.unsplash.com/photo-1576086446116-dc36b03c4fec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      artistsHeadLine: 'artistid 3',
    },
    {
      id: '4',
      imageUri: 'https://images.unsplash.com/photo-1576086446116-dc36b03c4fec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      artistsHeadLine: 'artistid 4',
    },
  ],
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AlbumCategory
          title={albumCategory.title}
          albums={albumCategory.albums}
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
});
