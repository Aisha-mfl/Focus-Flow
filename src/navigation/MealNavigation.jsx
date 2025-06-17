import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
// import FavContextProvider from './store/context/favorities-context';
import BottomNavigator from '../MealProject/navigation/BottomNavigator';



const MealNavigation = () => {
    return (
        <>
        
            {/* <FavContextProvider> */}
            <BottomNavigator />
            {/* </FavContextProvider> */}
        </>

    );
};

export default MealNavigation;
