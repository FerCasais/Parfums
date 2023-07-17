import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style";
import DETAILS from "../../contants/data/details.json";

function Products({ route }) {
  const { categoryId } = route.params;

  const product = DETAILS.find((product) => product.categoryId === categoryId);

  return (
    <View style={styles.container}>
      <View style={[styles.containerImage]}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>USD {product.price}</Text>

        <Image
          source={{ uri: product.image2 }}
          style={styles.image2}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

export default Products;
