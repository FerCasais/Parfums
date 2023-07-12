import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    FlatList,
    ImageBackground,
    TouchableHighlight,
    Button,
  } from "react-native";
  import { styles } from "./style";


  
  import CATEGORIES from "../../contants/data/categories.json";
  
  import { CategoryItems, Header } from "../../components";
  import { useState } from "react";
  
  
  function Categories({onSelectCategory}) {
   
  
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
        
          <FlatList
            data={CATEGORIES}
            style={styles.categoryContainer}
            contentContainerStyle={styles.listCategory}
            renderItem={({ item }) => (
              <CategoryItems {...item} onSelectCategory={onSelectCategory} />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    );
  }

  export default Categories;