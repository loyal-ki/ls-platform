import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from '../screens/account-screen';

export type AccountStackParamList = {
  Account: undefined;
};

const Home = createNativeStackNavigator<AccountStackParamList>();

const AccountNavigator = () => {
  return (
    <Home.Navigator>
      <Home.Screen name="Account" component={AccountScreen} />
    </Home.Navigator>
  );
};

export default AccountNavigator;
