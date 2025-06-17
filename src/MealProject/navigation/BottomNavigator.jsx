import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from '@react-native-vector-icons/entypo';
import MealsStack from './MealStack';
import FavoriteScreen from '../screens/FavoriteScreen';



const BottomTab = createBottomTabNavigator();

const  BottomNavigator = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' },
                tabBarActiveTintColor: '#000000',
                headerStyle: { backgroundColor: '#d6a8a8cc' },
                contentStyle: { backgroundColor: '#f1e6e6' },
                tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' },
            }}
        >
            <BottomTab.Screen
                name="Meals"
                component={MealsStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="list" size={size} color="#9b5050" />

                    ),
                    headerShown: false,
                }}
            />
            <BottomTab.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="heart" size={size} color="#9b5050" />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};

export default BottomNavigator;
