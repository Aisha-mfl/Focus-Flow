import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Allplaces from '../NativeProject/screens/Allplaces';
import Entypo from '@react-native-vector-icons/entypo';
import Addplace from '../NativeProject/screens/Addplace';
import Map from '../NativeProject/screens/Map';
import PlaceDetails from '../NativeProject/screens/PlaceDetails';


const Stack = createNativeStackNavigator();

const NativeDeviceNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#f7b2b2cc' },
      contentStyle: { backgroundColor: '#ffefef' },
    }}>
      <Stack.Screen 
      name='AllPlaces' 
      component={Allplaces} 
      options={({ navigation }) => ({
        title: 'Your Favorite Places',
        headerRight: () => (
          <Entypo
            name='plus'
            size={24}
            color="#0c0c0c"
            onPress={() => {
              console.log('clicked');
              navigation.navigate('AddPlaces');
            }}
          />
        ),
        headerLeft: () => {
          return (
            <TouchableOpacity
              style={{ marginRight: 6, padding: 13 }} onPress={() => navigation.toggleDrawer()}>
                <Entypo name="menu" size={24} color="#000000" />
              </TouchableOpacity>
          );
        },
      })}
      />
      <Stack.Screen name='AddPlaces' component={Addplace}
        options={{
          title: 'Add new Places',
        }} />
        <Stack.Screen name='Maps' component={Map}
        options={{
          title: 'Pick MAPS',
        }} />
        <Stack.Screen name='PlaceDetails' component={PlaceDetails}
        options={{
          title: 'Place Details',
        }} />

    </Stack.Navigator>
  )
}

export default NativeDeviceNavigation

const styles = StyleSheet.create({})