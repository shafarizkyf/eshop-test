import Button from 'components/Button';
import {AppContext} from 'context/AppContext';
import {HomeTabProps} from 'navigations/type';
import {useContext} from 'react';
import {Text} from 'react-native';

const ProfileScreen = ({navigation}: HomeTabProps<'ProfileScreen'>) => {
  const {session} = useContext(AppContext);

  console.log(session);

  if (!session) {
    return (
      <Button text="Login" onPress={() => navigation.navigate('LoginScreen')} />
    );
  }

  return <Text>{JSON.stringify(session)}</Text>;
};

export default ProfileScreen;
