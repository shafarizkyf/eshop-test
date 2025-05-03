import {NavigationContainer} from '@react-navigation/native';
import AppContext from 'context/AppContext';
import RootNavigation from 'navigations/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppContext>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </AppContext>
    </SafeAreaProvider>
  );
};

export default App;
