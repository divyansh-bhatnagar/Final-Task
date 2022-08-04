import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './src/screen/Home'
import BTBar from './src/Navigation/BTBar'
import SignUp from './src/screen/SignUp'
import SignIn from './src/screen/SignIn'
import { NavigationContainer } from '@react-navigation/native'
import { AuthNavigation, AppNavigation } from './src/Navigation/Navigation';
import { Provider } from 'react-redux';
import store from './src/store/store';
import DrawerComponent from './src/Navigation/DrawerComponent';

const App = () => {
  // const [authenticated, setAuthenticated] = useState(false);
  
  // useEffect(() => {
  //   const checkAuth = async () => {
  //     const user = await AsyncStorage.getItem('currentuser');
  //     if (user) {
  //       setAuthenticated(true);
  //     }
  //   }
  //   checkAuth();
  // }, []);

  return (
    <Provider store={store}>
    <NavigationContainer>
      {/* {authenticated ? <AppNavigation /> : <AuthNavigation />} */}
     <AppNavigation />
    </NavigationContainer> 
    {/* // <Home /> */}
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})