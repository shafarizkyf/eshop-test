import FastImage from '@d11/react-native-fast-image';
import {StyleSheet, Text, View} from 'react-native';
import color from 'styles/color';
import style from 'styles/style';

type Props = {
  title: string;
  thumbnail: string;
  subtotal: number | string;
};

const CheckoutItemCard = (props: Props) => (
  <View style={styles.container}>
    <View style={[style.row, style.gap18]}>
      <FastImage source={{uri: props.thumbnail}} style={styles.thumbnail} />
      <View style={styles.info}>
        <View style={[style.flex1]}>
          <Text numberOfLines={1}>{props.title}</Text>
        </View>
        <Text>{`$${props.subtotal}`}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: color.muted,
  },
  thumbnail: {
    width: 50,
    height: 50,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    gap: 22,
  },
});

export default CheckoutItemCard;
