import Icon from '@react-native-vector-icons/ionicons';
import dayjs from 'dayjs';
import {StyleSheet, Text, View} from 'react-native';
import color from 'styles/color';
import style from 'styles/style';
import {Review} from 'types/product';
import {colorAlpha} from 'utils/color';

const ReviewCard = (props: Review) => {
  const rating = Math.abs(props.rating);

  return (
    <View style={styles.container}>
      <Text>{props.comment}</Text>
      <View style={style.rowBetweenInCenter}>
        <View style={styles.stars}>
          {Array(rating)
            .fill('')
            .map((_, i) => (
              <Icon
                key={`star-filled-${i}`}
                name="star"
                size={16}
                color={color.reviewStar}
              />
            ))}
          {Array(5 - rating)
            .fill('')
            .map((_, i) => (
              <Icon
                key={`star-filled-${i}`}
                name="star-outline"
                size={16}
                color={color.reviewStar}
              />
            ))}
        </View>
        <Text style={style.f11}>
          {dayjs(props.date).format('DD MMMM YYYY')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: colorAlpha('#000', 0.1),
    gap: 6,
  },
  stars: {
    flexDirection: 'row',
    gap: 4,
  },
});

export default ReviewCard;
