import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import { MEALS } from '../data/dummy-data';
import Meallist from '../components/MealsList/Meallist';
import Fonts from '../../assets/fonts';

const FavoriteScreen = () => {
    // const favMealContext = useContext(FavoriteContext);
    const favoriteMealsids = useSelector(state => state.favMeals.ids)

    const favMeals = MEALS.filter((meal) => favoriteMealsids.includes(meal.id));
    if (favMeals.length === 0) {
        return <View style={styles.root}>
            <Text style={styles.text}>you have no favorite meals yet</Text>
        </View>
    }

    return (
        <Meallist items={favMeals} />
    )
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: Fonts.OpenSans.bold,
        color:'#9b5050'
    }
})