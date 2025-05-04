import {NavigationContainer} from '@react-navigation/native';
import AppContext from 'context/AppContext';
import {navigationRef} from 'navigations/NavigationRef';
import RootNavigation from 'navigations/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SheetProvider} from 'react-native-actions-sheet';
import 'components/ActionSheet/sheets';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppContext>
        <SheetProvider>
          <NavigationContainer ref={navigationRef}>
            <RootNavigation />
          </NavigationContainer>
        </SheetProvider>
      </AppContext>
    </SafeAreaProvider>
  );
};

export default App;
