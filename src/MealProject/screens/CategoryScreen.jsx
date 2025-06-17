import { FlatList, StyleSheet, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';



const CategoryScreen = ({ navigation }) => {
  const renderCategoryItem = itemData => {
    const presshandler = () => {
      navigation.navigate('MealScreen', {
        CategoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTitle
        title={itemData.item.title}
        image={itemData.item.image}
        onPress={presshandler}

      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategoryItem.bind()}
        numColumns={2}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
