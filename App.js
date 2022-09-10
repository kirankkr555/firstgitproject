import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppRoot from './src/App';
import SplashScreen from 'react-native-splash-screen';



const App = () => {

  useEffect(()=>{
    setTimeout(()=>{
        SplashScreen.hide();
    },1000)
    },[]);

  return (
    <SafeAreaProvider>
          <AppRoot />
    </SafeAreaProvider>
  );
};

export default App;
