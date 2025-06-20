import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Entypo from '@react-native-vector-icons/entypo';
import {Colors} from '../../../constant/style';

const OutlineButton = ({onPress, icon, children , style}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Entypo
          style={styles.icon}
          name={icon}
          size={18}
          color='white'
        />
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius: 12,
    flexDirection:'row',
    backgroundColor: Colors.primary500,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 15,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },

  icon: {
    marginRight: 8,
  },
});
