import { StyleSheet, Text } from 'react-native';
import Colors from '../../../utils/colors';
import Fonts from '../../../assets/fonts';

const InstructionText = ({ children, style }) => {
    return (
        <Text style={[styles.text , style]}>{children}</Text>
    );
};

export default InstructionText;

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: Colors.primary300,
        fontFamily:Fonts.Roboto.bold,
    },

});
