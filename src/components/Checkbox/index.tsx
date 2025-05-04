import Icon from '@react-native-vector-icons/ionicons';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import color from 'styles/color';

type Props = TouchableOpacityProps & {
  checked: boolean;
};

const Checkbox = (props: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.checked ? styles.active : {}]}
      activeOpacity={0.8}
      {...props}>
      {props.checked && <Icon name="checkmark" color="#fff" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: color.primary,
  },
});

export default Checkbox;
