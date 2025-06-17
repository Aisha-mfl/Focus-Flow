import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useContext, useLayoutEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import List from '../components/MealDetail/List';
import Fonts from '../../assets/fonts';
import SubTitle from '../components/MealDetail/SubTitle';
import IconButton from '../components/IconButton';
import { addFavorite, removefavorite } from '../../store/favorites';

// import { FavoriteContext } from '../../store/context/favorities-context';

const DetailedScreen = ({route, navigation}) => {
  // const favMealContext = useContext(FavoriteContext);
  const favMealids = useSelector(state => state.favMeals.ids);
  const Dispatch = useDispatch();

  const mealId = route.params.mealId;
  const SelectedMeal = MEALS.find(meal => meal.id === mealId);

  // const MealisFav = favMealContext.ids.includes(mealId);
  // console.log(MealisFav);
  const MealisFav = favMealids.includes(mealId);
  console.log(MealisFav);

  const ChangeFavStatusHandler = () => {
    if (MealisFav) {
      // favMealContext.removeFavorite(mealId);
      Dispatch(removefavorite({id: mealId}));
    } else {
      // favMealContext.addFavorite(mealId);
      Dispatch(addFavorite({id: mealId}));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={MealisFav ? 'heart' : 'heart-outlined'}
            onPress={ChangeFavStatusHandler}
          />
        );
      },
    });
  }, [navigation, ChangeFavStatusHandler]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: SelectedMeal.imageUrl}} />
        </View>

        <Text style={styles.title}>{SelectedMeal.title}</Text>
        <MealDetails
          duration={SelectedMeal.duration}
          complexity={SelectedMeal.complexity}
          affordability={SelectedMeal.affordability}
        />

        <SubTitle>Ingredients</SubTitle>
        <List data={SelectedMeal.ingredients} />
        <SubTitle>Steps</SubTitle>
        <List data={SelectedMeal.steps} />
      </ScrollView>
    </View>
  );
};

export default DetailedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginBottom: 32,
  },
  imageContainer: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderWidth: 4,
    borderColor: 'white',
    overflow: 'hidden',
    margin: 40,
    borderRadius: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  title: {
    fontFamily: Fonts.OpenSans.bold,
    fontSize: 25,
    textAlign: 'center',
    padding: 3,
  },
});
