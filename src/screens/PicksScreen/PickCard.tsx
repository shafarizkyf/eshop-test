import colorAlpha from 'color-alpha';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';

const {height: wHeight} = Dimensions.get('window');
const cardHeight = wHeight / 2 - 50;

export type PickCardProps = {
  color: string;
  secondaryColor: string;
  abbreviation: string;
  isSelected: boolean;
  onPress: () => void;
};

const PickCard = (props: PickCardProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        props.isSelected
          ? {
              borderColor: `#${props.secondaryColor}`,
              backgroundColor: `#${props.color}`,
            }
          : {borderColor: `#${props.color}`},
      ]}
      onPress={props.onPress}
      activeOpacity={0.8}>
      <Text
        style={[
          styles.text,
          props.isSelected
            ? {color: `#${props.secondaryColor}`}
            : {color: `#${props.color}`},
        ]}>
        {props.abbreviation}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: cardHeight,
    backgroundColor: '#fff',
    borderWidth: 4,
    borderColor: colorAlpha('#000', 0.1),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 600,
  },
});

export default PickCard;
