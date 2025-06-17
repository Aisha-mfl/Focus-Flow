import { StyleSheet, Text, View ,Dimensions } from 'react-native';
import Colors from '../../../utils/colors';
import Fonts from '../../../assets/fonts';



export default function Number({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 5,
        borderColor: Colors.primary600,
        padding: deviceWidth < 380 ? 12 : 24,
        borderRadius: 10,
        margin: deviceWidth < 380 ? 12 : 30 ,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary500,
        maxWidth:'100%',
        width:300,
    },
    text: {
        color: Colors.primary600,
        fontSize: deviceWidth < 380 ? 28 : 29,
        fontFamily: Fonts.Roboto.light,
    },
});
