import React from "react";
import { TouchableHighlight, Text, ImageBackground,  useWindowDimensions,   } from "react-native";
import { styles } from "./style";

const CategoryItems = ({
  id,
  name,
  backgroundColor,
  backgroundImage,
  onSelectCategory,
  style

}) => {
  // const { width } = useWindowDimensions();

  // const isTablet = width > 650;
  return (
    <TouchableHighlight
      onPress={() => onSelectCategory(id)}
      style={[styles.container, { backgroundColor }]}
    >
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={[styles.imageBackground, style]}
        resizeMode="cover">
        <Text style={styles.categoryName}>{name}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
};

export default CategoryItems;