import { View, SafeAreaView, Text, Button, ActivityIndicator } from "react-native";
import { styles } from "./style";
import { Header } from "./components";
import { useState } from "react";
import { Categories } from "./screens";
import Home from "./screens/home";
import StartPage from "./screens/startPage";
import { useFonts } from "expo-font";


export default function App() {

  const [fontsLoaded] = useFonts({
    'dancing-bold': require('../assets/fonts/DancingScript-Bold.ttf'),
  })

  const [isSelected, setIsSelected] = useState(false);
 

  const onSelectProducts = () => onSelect


 
if(!fontsLoaded) {
  return (
  <View style={styles.splashFonts}>

<ActivityIndicator style={styles.activityIndicator}/>

  </View>
)}


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
