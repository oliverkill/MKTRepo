import React from "react";
import { View, Image, Text} from "react-native";
import styles from './styles';

export type AlbumProps = {
    album: {
        id: string;
        imageUri: string;
        artistsHeadLine: string;
    }
}

const Album = (props: AlbumProps) => (
    <View style={styles.container}>
        <Image source={{ uri: props.album.imageUri}} style={styles.image} />
        <Text style={styles.text}>{props.album.artistsHeadLine}</Text>
    </View>
)

export default Album;