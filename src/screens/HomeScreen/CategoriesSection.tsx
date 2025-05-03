import CategoryCard from 'components/CategoryCard';
import {AppContext} from 'context/AppContext';
import {navigationRef} from 'navigations/NavigationRef';
import {useContext, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CategoriesSection = () => {
  const {categories} = useContext(AppContext);

  const categoriesTrimmed = useMemo(() => {
    return categories.slice(0, 6);
  }, [categories]);

  return (
    <View style={styles.section}>
      <Text style={styles.headerText}>Categories</Text>
      <View style={styles.grid}>
        {categoriesTrimmed.map(item => (
          <CategoryCard
            key={item.slug}
            text={item.name}
            onPress={() =>
              navigationRef.navigate('ProductsCategoryScreen', {category: item})
            }
          />
        ))}
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});

export default CategoriesSection;
