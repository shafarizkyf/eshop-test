import {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import color from 'styles/color';

type Props = TouchableOpacityProps &
  PropsWithChildren & {
    text?: string;
  };

const Button = ({text, children, ...props}: Props) => (
  <TouchableOpacity style={styles.button} activeOpacity={0.8} {...props}>
    {text && <Text style={styles.text}>{text}</Text>}
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.primary,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 32,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Button;
