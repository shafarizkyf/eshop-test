import {NavigationContainer} from '@react-navigation/native';
import AppContext from 'context/AppContext';
import {navigationRef} from 'navigations/NavigationRef';
import RootNavigation from 'navigations/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SheetProvider} from 'react-native-actions-sheet';
import 'components/ActionSheet/sheets';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ComposeProviders from 'components/ComposeProvider';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ComposeProviders components={[AppContext, SheetProvider]}>
          <NavigationContainer ref={navigationRef}>
            <RootNavigation />
          </NavigationContainer>
        </ComposeProviders>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
