import React from 'react';

// import {Federated} from '@callstack/repack/client';
import MainNavigator from './navigation/main-navigator';
import {NavigationContainer} from '@react-navigation/native';

// const LSChatMiniApp = React.lazy(() =>
//   Federated.importModule('ls_chat_mini_app', './App'),
// );

// const LSAuthMiniApp = React.lazy(() =>
//   Federated.importModule('ls_auth_mini_app', './App'),
// );

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
