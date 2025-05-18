import colorAlpha from 'color-alpha';
import {StyleSheet, Text, View} from 'react-native';

export type PickChipProps = {
  type: 'home' | 'away';
  color: string;
  secondaryColor: string;
  abbreviation: string;
  isSelected: boolean;
  hasSelection: boolean;
};

const BORDER_RADIUS = 6;

const PickChip = (props: PickChipProps) => {
  return (
    <View
      style={[
        styles.container,
        styles[props.type],
        !props.hasSelection && {borderColor: `#${props.color}`},
        props.isSelected && {
          backgroundColor: `#${props.color}`,
          borderColor: `#${props.secondaryColor}`,
        },
      ]}>
      <Text
        style={[
          styles.text,
          !props.hasSelection && {color: `#${props.color}`},
          props.isSelected && {color: `#${props.secondaryColor}`},
        ]}>
        {props.abbreviation}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: colorAlpha('#000', 0.1),
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width: 70,
    justifyContent: 'center',
    paddingVertical: 8,
  },
  away: {
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    borderRightWidth: 0,
  },
  home: {
    borderTopRightRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
    borderLeftWidth: 0,
  },
  text: {
    fontWeight: 600,
  },
});

export default PickChip;
