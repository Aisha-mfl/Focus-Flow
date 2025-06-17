import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabnavigator from './Tabnavigator';
import GoalNavigator from './GoalNavigator';
import GameNavigation from './GameNavigation';
import MealNavigation from './MealNavigation';
import ExpenseNavigation from './ExpenseNavigation';
import Entypo from '@react-native-vector-icons/entypo';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity, View, Text } from 'react-native';
import { authenticate, logout, setUser } from '../store/auth-store';
import NativeDeviceNavigation from './NativeDeviceNavigation';
import { useNavigation } from '@react-navigation/native';
import Notifications from '../screens/notifications/Notifications';




const Drawer = createDrawerNavigator();

export const MainDrawer = () => {
    const username = useSelector(state => state.auth.username);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#fac2c2' },
            drawerActiveBackgroundColor: '#f1dada',
            drawerActiveTintColor: '#9b5050',
        }} >
            <Drawer.Screen name='Welcome' component={Tabnavigator}
                options={{
                    drawerIcon: ({ color, size }) =>
                    (<Entypo name='home' size={size} color={color} />

                    ),
                    headerTitle: `Welcome, ${username || 'User'}!`,
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.navigate('notification')}>
                                <Entypo name='bell' size={24} color='#000000' />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginRight: 12 }} onPress={() => dispatch(logout())}>
                                <Entypo name='log-out' size={24} color='#000000' />
                            </TouchableOpacity>

                        </View>

                    ),
                }} />
            <Drawer.Screen name='Goal' component={GoalNavigator}
                options={{
                    drawerLabel: 'Goal Screen',
                    drawerIcon: ({ color, size }) =>
                        <Entypo name='trophy' size={size} color={color} />
                }}
            />
            <Drawer.Screen name='Game' component={GameNavigation}
                options={{
                    drawerLabel: 'Game Screen',
                    drawerIcon: ({ color, size }) =>
                        <Entypo name='game-controller' size={size} color={color} />
                }}
            />
            <Drawer.Screen name='Meal' component={MealNavigation}
                options={{
                    headerShown: false,
                    drawerLabel: 'Meal Screen',
                    drawerIcon: ({ color, size }) =>
                        <Entypo name='bowl' size={size} color={color} />
                }}
            />
            <Drawer.Screen name='Expense' component={ExpenseNavigation}
                options={{
                    headerShown: false,
                    drawerLabel: 'Expense Screen',
                    drawerIcon: ({ color, size }) =>
                        <Entypo name='wallet' size={size} color={color} />
                }}
            />
            <Drawer.Screen name='places' component={NativeDeviceNavigation}
                options={{
                    headerShown: false,
                    drawerLabel: 'Native Device Screen',
                    drawerIcon: ({ color, size }) =>
                        <Entypo name='camera' size={size} color={color} />
                }}
            />
            <Drawer.Screen name='notification' component={Notifications}
                options={{

                    drawerLabel: 'Notification Screen',
                    drawerIcon: ({ color, size }) =>
                        <Entypo name='bell' size={size} color={color} />
                }}
            />

        </Drawer.Navigator>


    );
}

