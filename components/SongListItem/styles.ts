import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 24,
    },
    artist: {
        color: 'lightgray',
        fontSize: 20,
    },
    image: {
        width: 75,
        height: 75,
    },
    container: {
        flexDirection: 'row',
        margin: 15,
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 15,
    },
});

export default styles;