import {NavigationContainer} from '@react-navigation/native';
import AppContext from 'context/AppContext';
import {navigationRef} from 'navigations/NavigationRef';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SheetProvider} from 'react-native-actions-sheet';
import 'components/ActionSheet/sheets';
import {QueryClient} from '@tanstack/react-query';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ComposeProviders from 'components/ComposeProvider';
import RootNavigation from 'navigations/RootNavigation';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours,
    },
  },
});

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

const App = () => {
  return (
    <SafeAreaProvider>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{persister: asyncStoragePersister}}>
        <ComposeProviders components={[AppContext, SheetProvider]}>
          <NavigationContainer ref={navigationRef}>
            <RootNavigation />
          </NavigationContainer>
        </ComposeProviders>
      </PersistQueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
