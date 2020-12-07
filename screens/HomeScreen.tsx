import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Album from '../components/Album';

const album = {
  id: '1',
  imageUri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
  artistsHeadLine: 'Asd, askdn, aosndas d,asidnaos fjoa',
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Album album={album}/>
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
