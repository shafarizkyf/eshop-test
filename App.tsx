import AppContext from 'context/AppContext';
import {SafeAreaView} from 'react-native';
import HomeScreen from 'screens/HomeScreen';
import color from 'styles/color';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: color.bgWhite, flex: 1}}>
      <AppContext>
        <HomeScreen />
      </AppContext>
    </SafeAreaView>
  );
};

export default App;
