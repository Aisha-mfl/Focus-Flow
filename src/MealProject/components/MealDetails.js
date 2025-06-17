import {StyleSheet, Text, View} from 'react-native';
import Fonts from '../../assets/fonts';

const MealDetails = ({duration, complexity, affordability}) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration}</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    textAlign: 'center',
    justifyContent: 'center',
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 18,
    marginTop:3,
    fontFamily: Fonts.OpenSans.semiBold,
  },
});
