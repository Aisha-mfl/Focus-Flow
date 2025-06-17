import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import Login from "../screens/userAuth/Login";
import Signup from "../screens/userAuth/Signup";
import { authenticate } from "../store/auth-store";
import { MainDrawer } from "./MainDrawer";
import { useEffect, useState } from "react";
import {  initDatabase } from "../utils/db-servise";
import LoadingOverlay from "../ui/LoadingOverlay";
import Home from "../screens/Home";


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator  initialRouteName="Home" screenOptions={{
            headerStyle: { backgroundColor: '#f7b2b2cc' },
            contentStyle: { backgroundColor: '#ffefef' },
        }}>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='login' component={Login} />
            <Stack.Screen name='signup' component={Signup} />
            
        </Stack.Navigator>
    );
}

export const AppNavigation = () => {
    const [dbInitialized, setDbInitialized] = useState(false);

    useEffect(() => {
        initDatabase().
            then(() => {
                setDbInitialized(true);
            }).catch(err => {
                console.log(err);

            });
    }, []);

    if (!dbInitialized) {
        <LoadingOverlay messege='Not Initailized' />
    }
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchToken = async () => {
            const Storedtoken = await AsyncStorage.getItem('token');
            console.log('token', Storedtoken);
            if (Storedtoken) {
                dispatch(authenticate(Storedtoken));
            }
        }
        fetchToken();
    }, []);

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    console.log('Authentication', isAuthenticated);

    return (
        <>
            {!isAuthenticated ? <AuthStack /> : <MainDrawer />}
        
        </>
    )
}
