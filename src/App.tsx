import React from 'react';

import {Federated} from '@callstack/repack/client';
import MainNavigator from './navigation/main-navigator';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './screens/splash-screen';
import ErrorBoundary from './components/error-boundary';

const AuthProvider = React.lazy(() =>
  Federated.importModule('ls_auth_mini_app', './AuthProvider'),
);
const LoginScreen = React.lazy(() =>
  Federated.importModule('ls_auth_mini_app', './LoginScreen'),
);

const App = () => {
  return (
    <ErrorBoundary name="AuthProvider">
      <React.Suspense fallback={<SplashScreen />}>
        <AuthProvider>
          {(authData: {isSignout: boolean; isLoading: boolean}) => {
            if (authData.isLoading) {
              return <SplashScreen />;
            }

            if (authData.isSignout) {
              return (
                <React.Suspense fallback={<SplashScreen />}>
                  <LoginScreen />
                </React.Suspense>
              );
            }

            return (
              <NavigationContainer>
                <MainNavigator />
              </NavigationContainer>
            );
          }}
        </AuthProvider>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default App;
