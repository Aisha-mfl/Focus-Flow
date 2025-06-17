import { StyleSheet, Text, View , Platform } from 'react-native';
import Colors from '../../../utils/colors';
import Fonts from '../../../assets/fonts';

const Title = ({ children, style}) => {
    return (
        <View>
            <Text style={[styles.title , style]}>{children}</Text>
        </View>
    );
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: Colors.primary500,
        textAlign: 'center',
        // borderWidth: Platform.OS === 'android' ? 2 : 0 ,
        borderWidth: Platform.select({ios:0 , android:2}),
        borderColor: Colors.primary500,
        padding: 12,
        marginTop: 50,
        borderRadius:20,
        fontFamily: Fonts.Roboto.bold,
        maxWidth:'80%',
        width:300,
    },
});

