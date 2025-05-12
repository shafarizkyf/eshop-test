import {AuthResponse} from '@supabase/supabase-js';
import {useMutation} from '@tanstack/react-query';
import Button from 'components/Button';
import TextInput from 'components/TextInput';
import {RootStackProps} from 'navigations/type';
import {useState} from 'react';
import {Text, View} from 'react-native';
import authentication from 'services/authentication';
import style from 'styles/style';
import {toast} from 'utils/feature';

const RegistrationScreen = ({
  navigation,
}: RootStackProps<'RegistrationScreen'>) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const registrationMutation = useMutation({
    mutationFn: authentication.signUpWithEmail,
    onSuccess: (data: AuthResponse) => {
      console.log(data);

      if (data.error) {
        toast(data.error.message);
        throw data.error;
      }

      navigation.replace('BottomTabNavigation');
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
        text="Register"
        onPress={() =>
          registrationMutation.mutate({
            email,
            password,
          })
        }
      />
      <Text style={style.mt40} onPress={() => navigation.pop()}>
        Login here
      </Text>
    </View>
  );
};

export default RegistrationScreen;
