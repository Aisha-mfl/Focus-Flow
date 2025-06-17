import {StyleSheet, View} from 'react-native';
import Colors from '../../../utils/colors';


export default function Card({children}) {
  return <View style={styles.inputcontainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputcontainer: {
    marginHorizontal: 24,
    marginTop: 36,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    backgroundColor: Colors.primary500,
    borderRadius: 20,
    elevation: 15,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
