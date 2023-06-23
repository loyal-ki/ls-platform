import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AccountNavigator from './account-navigator';
import HomeNavigator from './home-navigator';
import ChatNavigator from './chat-navigator';

export type TabsParamList = {
  HomeNavigator: undefined;
  ChatNavigator: undefined;
  AccountNavigator: undefined;
};

const Tabs = createMaterialBottomTabNavigator<TabsParamList>();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          title: 'Home',
          tabBarIcon: 'home',
        }}
      />
      <Tabs.Screen
        name="ChatNavigator"
        component={ChatNavigator}
        options={{
          title: 'Chat',
          tabBarIcon: 'chat',
        }}
      />
      <Tabs.Screen
        name="AccountNavigator"
        component={AccountNavigator}
        options={{
          title: 'Account',
          tabBarIcon: 'account',
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
