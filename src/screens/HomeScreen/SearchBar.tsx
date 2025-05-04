import Icon from '@react-native-vector-icons/ionicons';
import {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import color from 'styles/color';

type Props = {
  onChangeKeyword: (value: string) => void;
};

const SearchBar = (props: Props) => {
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      props.onChangeKeyword(keyword);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [keyword, props]);

  return (
    <View style={styles.container}>
      <Icon name="search-outline" color={color.muted} size={18} />
      <TextInput
        placeholder="Search"
        style={styles.textInput}
        placeholderTextColor={color.muted}
        value={keyword}
        onChangeText={setKeyword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 12,
    flex: 1,
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
  },
});

export default SearchBar;
