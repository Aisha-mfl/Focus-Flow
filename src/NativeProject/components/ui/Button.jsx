import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/style';
import { TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        paddingVertical: 11,
        marginVertical:-1,
        paddingHorizontal: 10,
        borderRadius: 12,
        flexDirection: 'row',
        backgroundColor: Colors.primary500,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:2,
    },
    text: {
        fontSize: 16,
        color: 'white',
    },

})