import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '../screens/chat-screen';

export type ChatStackParamList = {
  Chat: undefined;
};

const Home = createNativeStackNavigator<ChatStackParamList>();

const ChatNavigator = () => {
  return (
    <Home.Navigator>
      <Home.Screen name="Chat" component={ChatScreen} />
    </Home.Navigator>
  );
};

export default ChatNavigator;
