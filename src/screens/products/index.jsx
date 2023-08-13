import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  StatusBar,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import { styles } from "./style";
import { Card, Title, Paragraph } from "react-native-paper";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../../store/products/apis";

function Products({ navigation, route }) {
  const productsRedux = useSelector((state) => state.products.data);

  const categoriesRedux = useSelector((state) => state.categories.data);

  const { categoryId, backgroundImage } = route.params;

  const { data, error, isLoading } = useGetProductsByCategoryQuery(categoryId);

  const products = data?.filter((product) => product.categoryId === categoryId);

  const details = categoriesRedux.find(
    (photo) => photo.categoryId === categoryId
  );

  const onSelectItem = ({ productId, name }) => {
    navigation.navigate("ItemDetail", { productId, name });
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerImage}>
          <Image
            source={{ uri: backgroundImage }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <View style={styles.touchable}>
              <TouchableHighlight
                onPress={(id) =>
                  onSelectItem({ productId: item.id, name: item.name })
                }
              >
                <View>
                  <Card.Content style={styles.cardView}>
                    <Title>
                      <Text style={styles.name}>{item.name}</Text>
                    </Title>
                  </Card.Content>

                  <Card.Cover
                    source={{ uri: item.image2 }}
                    style={styles.image2}
                    resizeMode="contain"
                  />

                  <Card.Content>
                    <Paragraph>Eau de Parfum 50ml</Paragraph>
                    <Text style={styles.price}>USD {item.price}</Text>
                  </Card.Content>
                </View>
              </TouchableHighlight>
            </View>
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </>
  );
}

export default Products;

const Styles = StyleSheet.create({
  container: {
    alignContent: "center",
    width: "100%",
    marginBottom: 15,
    marginRight: 5,
    marginLeft: 5,
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});