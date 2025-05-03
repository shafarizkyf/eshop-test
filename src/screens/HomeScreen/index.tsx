import CategoryCard from 'components/CategoryCard';
import {AppContext} from 'context/AppContext';
import {useContext, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import style from 'styles/style';

const HomeScreen = () => {
  const {categories} = useContext(AppContext);

  const categoriesTrimmed = useMemo(() => {
    return categories.slice(0, 5);
  }, [categories]);

  return (
    <View style={style.container}>
      <View style={styles.section}>
        <Text style={styles.headerText}>Categories</Text>
        <View style={styles.categories}>
          {categoriesTrimmed.map(item => (
            <CategoryCard key={item.slug} text={item.name} />
          ))}
          <CategoryCard text="See All" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    gap: 18,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 800,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});

export default HomeScreen;
