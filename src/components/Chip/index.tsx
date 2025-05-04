import colorAlpha from 'color-alpha';
import {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

const Chip = (props: PropsWithChildren) => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colorAlpha('#000', 0.2),
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    gap: 4,
  },
});

export default Chip;
