import {AuthTokenResponsePassword} from '@supabase/supabase-js';
import {useMutation} from '@tanstack/react-query';
import Button from 'components/Button';
import TextInput from 'components/TextInput';
import {RootStackProps} from 'navigations/type';
import {useState} from 'react';
import {Text, View} from 'react-native';
import authentication from 'services/authentication';
import style from 'styles/style';
import {toast} from 'utils/feature';

const LoginScreen = ({navigation}: RootStackProps<'LoginScreen'>) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginMutation = useMutation({
    mutationFn: authentication.signInWithEmail,
    onSuccess: (data: AuthTokenResponsePassword) => {
      console.log(data);
      if (data.error) {
        toast(data.error.message);
        throw data.error;
      }

      navigation.pop();
    },
  });

  return (
    <View style={[style.container, style.gap8]}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        text="Login"
        onPress={() =>
          loginMutation.mutate({
            email,
            password,
          })
        }
      />
      <Text
        style={style.mt40}
        onPress={() => navigation.navigate('RegistrationScreen')}>
        Register here
      </Text>
    </View>
  );
};

export default LoginScreen;
