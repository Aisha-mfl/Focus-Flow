import { Pressable, StyleSheet, Text, View } from 'react-native'
import Entypo from '@react-native-vector-icons/entypo';

const IconButton = ({ icon, size, color, onPress }) => {
    return (
        <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPress}>
            <View style={styles.buttonContainer}>
                <Entypo name={icon} size={size} color={color} />
                
            </View>
        </Pressable>
    )
}

export default IconButton

const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius:24,
        padding:6,
        margin:8
    },
    pressed:{
        opacity:0.75,
    }
})