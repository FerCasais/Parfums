import { View, SafeAreaView, Text, Button } from "react-native";
import { styles } from "./style";
import { Header } from "./components";
import { useState } from "react";
import { Categories } from "./screens";
import Home from "./screens/home";


export default function App() {
  const [isSelected, setIsSelected] = useState(false);

  const [fontsLoaded] = useState(fonts);

  const onSelectCategory = (categoryId) => {
    setIsSelected(!isSelected);
    console.warn({ categoryId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="La boutique des parfums" />
        {isSelected ? (
          <View>
             <Home />
            <Button title="volver" onPress={() => setIsSelected(!isSelected)} />
           
          </View>
        ) : (
          <Categories onSelectCategory={onSelectCategory} />
        )}

        {/* <FlatList
          data={CATEGORIES}
          style={styles.categoryContainer}
          contentContainerStyle={styles.listCategory}
          renderItem={({ item }) => (
            <CategoryItems {...item} onSelectCategory={onSelectCategory} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        /> */}
      </View>
    </SafeAreaView>
  );
}
