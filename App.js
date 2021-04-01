import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'


export default function App() {
  return (
   <AppContainer/>
  )
}

const BottomTabNavigator=createBottomTabNavigator({
  FbScreen:{screen:FbScreen},
  InScreen:{screen:InScreen}
})

const AppContainer =createAppContainer(BottomTabNavigator)


