import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../../constants';

import HomeScreen from '../HomeScreen';
import PaymentsScreen from '../PaymentsScreen'
import UserScreen from '../UserScreen'

const homeName     = 'Home'
const paymentsName = 'Payments'
const userName     = "Profile";

const Tab = createBottomTabNavigator()

function TabNavigator() {
  return (
    
    <Tab.Navigator
    initialRouteName={homeName}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let rn = route.name;

        if (rn === homeName) {
          iconName = focused ? 'home' : 'home-outline';

        } else if (rn === paymentsName) {
          iconName = focused ? 'wallet' : 'wallet-outline';

        } else if (rn === userName) {
          iconName = focused ? 'person' : 'person-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
        
      },
    })}
    tabBarOptions={{
      activeTintColor: COLORS.primary,
      inactiveTintColor: 'grey',
      labelStyle: { paddingBottom: 10, fontSize: 10 },
      style: { padding: 10, height: 70}
    }}>
          
          <Tab.Screen options={{ headerShown: false }} name={homeName}     component={ HomeScreen }/>
          <Tab.Screen options={{ headerShown: false }} name={paymentsName} component={ PaymentsScreen }/>
          <Tab.Screen options={{ headerShown: false }} name={userName}     component={ UserScreen }/>

      </Tab.Navigator>
  )
}

export default TabNavigator;