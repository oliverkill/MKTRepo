import React, { useEffect, useState, useCallback } from "react";
import { Text, Image, View } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import { Sound } from "expo-av/build/Audio";
import { TouchableOpacity } from "react-native-gesture-handler";

const song = {
    id: '1',
    uri: 'http://killoliver.ikt.khk.ee/asd/avokaado%20(leidsin%20ta)%20(192%20kbps).mp3',
    imageUri: 'https://img.youtube.com/vi/3u4s4aZE5eI/0.jpg',
    title: 'avokaado',
    artist: 'Pitsa',
}

const PlayerWidget = () => {

    // Seame vajalikud muutujad muusika esitamiseks
    const [sound, setSound] = useState<Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isLiked, setLiked] = useState<boolean>(true);
    const [duration, setDuration] = useState<number | null>(null);
    const [position, setPosition] = useState<number | null>(null);

    // Võtame kasutusele laulu info kohta vastavad staatused
    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
        setLiked(status.isLiked);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    }

    // Funktsioon, mis esitab laulu
    const playCurrentSong = async () => {

        // Tagab, et korraga käiks vaid 1 laul/heli
        if (sound) {
            await sound.unloadAsync();
        }

        // Määrab valitud laulu ja selle parameetrid
        const { sound: newSound } = await Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: isPlaying },
            onPlaybackStatusUpdate
        )
        setSound(newSound);
    }

    // Käivitab laulu vastavate parameetritega
    useEffect(() => {
        playCurrentSong();
    }, [])

    // Funktsioon, mis võimaldab peatada ja käivitada laulu
    const onPlayPausePress = async () => {

        // Lisa kontroll
        if (!sound) {
            return;
        }
        if (isPlaying) {
            await sound.stopAsync();
        } else {
            await sound.playAsync();
        }
    }

    // https://www.joshwcomeau.com/snippets/react-hooks/use-toggle/
    const onLikePress = useCallback(() => {
        setLiked(isLiked => !isLiked);
      }, []);

    // Tagastab 'hetkel mängimas' vidina progress bar staatuse protsentides
    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return 0;
        }

        return (position / duration) * 100;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.progress, { width: `${getProgress()}%` }]} />
            <View style={styles.row}>
                <Image source={{ uri: song.imageUri }} style={styles.image} />
                <View style={styles.rightContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>{song.title}</Text>
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>
                    <View style={styles.iconsContainer}>
                        <TouchableOpacity onPress={onLikePress}>
                            <AntDesign name={isLiked ? 'hearto' : 'heart'} size={30} color={"white"} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onPlayPausePress}>
                            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color={"white"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
};

export default PlayerWidget;