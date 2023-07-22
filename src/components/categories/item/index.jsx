import React from "react";
import { TouchableHighlight, Text, ImageBackground } from "react-native";
import { styles } from "./style";


const CategoryItems = ({
  id,
  name,
  backgroundColor,
  backgroundImage,
  onSelectCategory,

}) => {
  return (
    <TouchableHighlight
      onPress={() => onSelectCategory(id)}
      style={[styles.container, { backgroundColor }]}
    >
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <Text style={styles.categoryName}>{name}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
};

export default CategoryItems;
