// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import HomeScreen from './screens/index';
import FriendsScreen from './screens/friends';
import ConnectionsScreen from './screens/connections';
import SettingsScreen from './screens/settings';
import CustomTabBar from './components/TabBar';


const Tab = createBottomTabNavigator();

// Load fonts
const loadFonts = () =>
  Font.loadAsync({
    'Outfit-Light': require('./assets/fonts/Outfit-Light.ttf'),
    'Outfit-Regular': require('./assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'Outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'PlayFairDisplay-Regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
    'PlayFairDisplay-Medium': require('./assets/fonts/PlayfairDisplay-Medium.ttf'),
    'PlayFairDisplay-SemiBold': require('./assets/fonts/PlayfairDisplay-SemiBold.ttf'),
    'PlayFairDisplay-Bold': require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Friends" component={FriendsScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Connections" component={ConnectionsScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}