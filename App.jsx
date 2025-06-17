import { NavigationContainer } from '@react-navigation/native';
import './gesture-handler';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { store } from './src/store/store';
import { AppNavigation } from './src/navigation/AuthStack';
import { useEffect } from "react";
import BootSplash from "react-native-bootsplash";


const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);

  return (
    <>
      <StatusBar style='dark' barStyle="dark-content" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store} >
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </Provider>
      </GestureHandlerRootView>
    </>
  )
}

export default App;

