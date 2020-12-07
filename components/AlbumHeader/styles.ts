import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        margin: 15,
        borderColor: 'white',
        borderWidth: 1,
    },
    container: {
        alignItems: 'center',
        padding: 20,
    },
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'blue',
        height: 55,
        width: 175,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'lightgray',
        fontSize: 22,
        fontWeight: 'bold',
    },
    creator: {
        color: 'lightgray',
        margin: 5,
        fontSize: 18,
    },
    likes: {
        color: 'lightgray',
        margin: 5,
        fontSize: 18,
    },
    creatorContainer: {
        flexDirection: 'row',
        margin: 10,
    }
});


export default styles;