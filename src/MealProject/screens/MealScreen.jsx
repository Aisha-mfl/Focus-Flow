import { StyleSheet } from 'react-native';

import { useLayoutEffect } from 'react';
import Meallist from '../components/MealsList/Meallist';
import { CATEGORIES, MEALS } from '../data/dummy-data';


const MealScreen = ({ navigation, route }) => {
    const catId = route.params.CategoryId;

    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({ title: categoryTitle });

    }, [catId, navigation]);

    return (
        <Meallist items={displayMeals} />
    );

};


export default MealScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});