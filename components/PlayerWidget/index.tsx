import React from "react";
import { Text, Image, View } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const song = {
    id: '2',
    imageUri: 'https://images.unsplash.com/photo-1576086446116-dc36b03c4fec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'fgh',
    artist: 'asd',
}

const PlayerWidget = () => {

    return (
        <View style={styles.container}>
            <Image source={{ uri: song.imageUri }} style={styles.image} />
            <View style={styles.rightContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <AntDesign name="hearto" size={30} color={"white"} />
                    <FontAwesome name="play" size={30} color={"white"} />
                </View>
            </View>
        </View>
    )
};

export default PlayerWidget;