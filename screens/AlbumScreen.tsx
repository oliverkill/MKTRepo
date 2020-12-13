import React, {useEffect} from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
import { useRoute } from '@react-navigation/native';
import albumDetails from "../data/albumDetails";
import SongListItem from "../components/SongListItem";
import AlbumHeader from "../components/AlbumHeader";

const AlbumScreen = () => {

    const route = useRoute();

    useEffect( () => {
       console.log(route);
    }, []);

    return (
        <View>
            <FlatList
                data={albumDetails.songs}
                renderItem={({ item }) => <SongListItem song={item} />}
                keyExtractor={( item => item.id)}
                ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
                style={styles.container}
            />
        </View>
    )
};

export default AlbumScreen;

const styles = StyleSheet.create({
    container: {
        marginBottom: 75,
    }
  });