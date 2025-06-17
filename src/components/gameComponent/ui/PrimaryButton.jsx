import { Pressable, Text, View, StyleSheet } from 'react-native';
import Colors from '../../../utils/colors';

const PrimaryButton = ({ children, onPress, style }) => {

    return (
        <View style={styles.buttonOuter}>
            <Pressable style={({ pressed }) =>
                pressed ? [styles.Innercontainer, styles.pressed, style] : [styles.Innercontainer, style]}
                onPress={onPress}
                android_ripple={{ color: Colors.primary300 }}>
                <Text style={[styles.ButtonText]}>{children}</Text>
            </Pressable>
        </View>

    );
};
const styles = StyleSheet.create({
    buttonOuter: {
        overflow: 'hidden',
        margin: 4,
        borderRadius: 20,


    },
    Innercontainer: {
        backgroundColor: Colors.primary600,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    ButtonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.75,
    },
});

export default PrimaryButton;
