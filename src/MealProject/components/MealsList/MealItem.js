import {Pressable, StyleSheet, Text, View, Image, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Fonts from '../../../assets/fonts';
import MealDetails from '../MealDetails';


const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();
  const SelectMealItem = () => {
    // navigation.navigate(
    //     'DetailScreen',
    //     {mealId: id}
    //   );
    navigation.navigate('Meals', {
        screen:'DetailScreen',
        params:{mealId: id}
      });
  };
  return (
    <View style={styles.MealItem}>
      <Pressable
        android_ripple={{color: '#cccc'}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}
        onPress={SelectMealItem}>
        <View>
          <Image style={styles.image} source={{uri: imageUrl}} />
          <Text style={styles.title}>{title}</Text>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  MealItem: {
    margin: 16,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 19,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  image: {
    width: '100%',
    height: 200,
    elevation: 7,
  },
  title: {
    fontFamily: Fonts.OpenSans.semiBold,
    fontSize: 19,
    textAlign: 'center',
  },

  buttonPressed: {
    opacity: 0.25,
  },
});
