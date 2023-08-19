import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";
import { styles } from "./style";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/cartSlice";
import { useGetProductByIdQuery } from "../../store/products/apis";

function ItemDetail({ navigation, route }) {

  const dispatch = useDispatch ()

  const productsRedux = useSelector((state) => state.products.data )
  const { productId } = route.params;

  const { data, isLoading, error } = useGetProductByIdQuery(productId);

  const product = productsRedux.find((product) => product.id === productId);


  const onAddToCart = () => {
   dispatch(addToCart(product));
    
  };



  return (
    <>
      <View>
        <Card.Content>
          <Title>
            <Text style={styles.name}>{product.name}</Text>
          
          </Title>
        </Card.Content>

        <Card.Cover
          source={{ uri: product.image2 }}
          style={styles.image2}
          resizeMode="contain"
        />

        <Card.Content>
          <Paragraph>{product.features}</Paragraph>
          <Text style={styles.price}>USD {product.price}</Text>
        </Card.Content>

        <Card.Actions>
          
          <Button onPress={onAddToCart}
        
          >
            Add To Chart
          </Button>
        </Card.Actions>
      </View>
     
     
   
    </>
  );
}

export default ItemDetail;

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