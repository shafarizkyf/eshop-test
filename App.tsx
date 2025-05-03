import {NavigationContainer} from '@react-navigation/native';
import AppContext from 'context/AppContext';
import {navigationRef} from 'navigations/NavigationRef';
import RootNavigation from 'navigations/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppContext>
        <NavigationContainer ref={navigationRef}>
          <RootNavigation />
        </NavigationContainer>
      </AppContext>
    </SafeAreaProvider>
  );
};

export default App;
