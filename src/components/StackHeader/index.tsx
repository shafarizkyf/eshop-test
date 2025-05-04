import Icon from '@react-native-vector-icons/ionicons';
import {StackHeaderProps} from '@react-navigation/stack';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const StackHeader = ({navigation, options}: StackHeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: insets.top + 20}]}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{options.title}</Text>
      </View>
      <TouchableOpacity onPress={navigation.goBack} testID="stackHeaderBackBtn">
        <Icon name="arrow-back" size={18} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 0,
    width: '100%',
  },
  text: {
    textAlign: 'center',
    fontWeight: 800,
  },
});

export default StackHeader;
