import {Dimensions, StyleSheet, Text, View} from 'react-native';
import PickCard, {PickCardProps} from './PickCard';

const {height: wHeight} = Dimensions.get('window');
const dividerBottom = wHeight / 2 - 70;

type Props = {
  homeTeam: PickCardProps;
  awayTeam: PickCardProps;
};

const PicksCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <PickCard {...props.homeTeam} />
      <PickCard {...props.awayTeam} />
      <View style={styles.divider}>
        <Text style={styles.dividerText}>@</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  divider: {
    position: 'absolute',
    width: 100,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: dividerBottom,
    backgroundColor: '#fff',
    borderWidth: 4,
    borderRadius: 10,
  },
  dividerText: {
    fontSize: 24,
    fontWeight: 800,
  },
});

export default PicksCard;
