import {StyleSheet, View} from 'react-native';
import PickChip, {PickChipProps} from './PickChip';
import RenderIf from 'components/RenderIf';

type Props = {
  homeTeam: Omit<PickChipProps, 'type'>;
  awayTeam: Omit<PickChipProps, 'type'>;
  isFocus: boolean;
};

const PicksChip = (props: Props) => {
  return (
    <View style={styles.container}>
      <RenderIf isTrue={props.isFocus}>
        <View style={styles.isFocus} />
      </RenderIf>
      <PickChip type="away" {...props.homeTeam} />
      <PickChip type="home" {...props.awayTeam} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  isFocus: {
    width: 2,
    height: '50%',
    backgroundColor: '#000',
    marginRight: 5,
  },
});

export default PicksChip;
