import WelcomeScreen from '../screens/WelcomeScreen';
import '../../gesture-handler';
import UserScreen from '../screens/UserScreen';
import Entypo from '@react-native-vector-icons/entypo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const BottomTab = createBottomTabNavigator();

const Tabnavigator = () => {

    return (
        <BottomTab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                headerStyle:{backgroundColor:'#9b5050'},
                headerTintColor:'black',
                tabBarActiveTintColor:'#000000',
                tabBarLabelStyle:{fontSize:13, fontWeight:'bold'
                },
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Welcome1') iconName = 'home';
                    else if (route.name === 'User') iconName = 'user';
                    return <Entypo name={iconName} size={size} color='#9b5050' />;
                },
            })}
        >
            <BottomTab.Screen name='Welcome1' component={WelcomeScreen} />
            <BottomTab.Screen name='User' component={UserScreen}
            />
        </BottomTab.Navigator>
    );
};

export default Tabnavigator;
