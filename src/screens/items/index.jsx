import { View, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import { styles } from "./style";
import { CategoryItems } from "../../components";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../../store/categories/apis";
import { COLORS } from "../../utils/colors";

function Categories({ navigation }) {

  const { data, error, isLoading } = useGetCategoriesQuery();

const categoriesRedux = useSelector((state) => state.categories.data)

  const onSelectCategory = ({ categoryId, name, color, image2, price, backgroundImage}) => {
    navigation.navigate("Products", {
      categoryId: categoryId,
      name: name,
      color: color,
      image2: image2,
      price: price,
      backgroundImage: backgroundImage,
    
    });
  };

  if (isLoading)
  return (
    <View style={styles.containerLoader}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        { <FlatList
          data={data}
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
                  image2: item.image2,
                  price: item.price,
                  backgroundImage: item.backgroundImage,
                 })
              }
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        /> }
      </View>
    </SafeAreaView>
  );
}

export default Categories;