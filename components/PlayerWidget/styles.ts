import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    },
    artist: {
        color: 'lightgray',
        fontSize: 18,
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 10,
    },
    container: {
        position: 'absolute',
        bottom: 49,
        width: '100%',
        backgroundColor: '#131313',
        borderBottomWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around',
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default styles;