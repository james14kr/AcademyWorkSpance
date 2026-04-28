import { Tabs } from 'expo-router';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarIcon : () => <Entypo name="home" size={24} color="black" />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          tabBarIcon : () => <EvilIcons name="user" size={24} color="black" />
        }}
      />
    </Tabs>
  );
}
