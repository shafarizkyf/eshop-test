import colorAlpha from 'color-alpha';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';

type Props = TextInputProps & {};

const TextInput = (props: Props) => {
  return <RNTextInput style={styles.textInput} {...props} />;
};

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 8,
    borderColor: colorAlpha('#000', 0.1),
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});

export default TextInput;
