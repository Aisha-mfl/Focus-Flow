import {StyleSheet, Text, View} from 'react-native';
import Fonts from '../../../assets/fonts';


const SubTitle = ({children}) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontFamily: Fonts.OpenSans.bold,
        fontSize: 24,
        margin: 5,
        padding: 16,
        color: '#fc8e8e',
    },
});
