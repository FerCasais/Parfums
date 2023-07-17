import { View, SafeAreaView, FlatList } from "react-native";
import { styles } from "./style";
import CATEGORIES from "../../contants/data/categories.json";
import { CategoryItems } from "../../components";

function Categories({ navigation }) {
  const onSelectCategory = ({ categoryId, name, color }) => {
    navigation.navigate("Products", {
      categoryId: categoryId,
      name: name,
      color: color,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={CATEGORIES}
          style={styles.categoryContainer}
          contentContainerStyle={styles.listCategory}
          renderItem={({ item }) => (
            <CategoryItems
              {...item}
              onSelectCategory={() =>
                onSelectCategory({
                  categoryId: item.id,
                  color: item.backgroundColor,
                  name: item.name,
                })
              }
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default Categories;
