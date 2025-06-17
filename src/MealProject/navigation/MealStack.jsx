import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from '../screens/CategoryScreen';
import MealScreen from '../screens/MealScreen';
import DetailedScreen from '../screens/DetailedScreen';
import Entypo from '@react-native-vector-icons/entypo';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

const MealsStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#d6a8a8cc' },
        contentStyle: { backgroundColor: '#f1e6e6' },
        headerLeft: () => {
          return <TouchableOpacity style={{marginRight: 12}}
          onPress={() => navigation.toggleDrawer()}>
            <Entypo name='menu' size={24} color='#000000' />
          </TouchableOpacity>
        }
      }}
    >
      <Stack.Screen name="Categories" component={CategoryScreen}
        options={
          { title: 'All Categories' }


        } />
      <Stack.Screen name="MealScreen" component={MealScreen} />
      <Stack.Screen name="DetailScreen" component={DetailedScreen} options={{ title: 'About the Meal' }} />
    </Stack.Navigator>
  );
};

export default MealsStack;
