import {Pressable, StyleSheet, Text, View} from 'react-native';
import Entypo from '@react-native-vector-icons/entypo';

const IconButton = ({ icon,color,onPress}) => {
  return (
    <View>
      <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
        <Entypo name={icon} size={27} color="white" />
      </Pressable>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
    pressed:{
        opacity:0.7,
    },
});
