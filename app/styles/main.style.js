import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 0.4,
        borderColor: 'red',
        padding: 1,
    },
    backGroundImage: {
        resizeMode: 'stretch',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    transparent: {
        backgroundColor: 'transparent'
    },
    card: {
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.3)'
    },
    textInput: {
        fontSize: 20,
        width: '100%',
        height: '100%',
        textAlign: 'center',
        color: 'white'
    },
    line: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    }


});