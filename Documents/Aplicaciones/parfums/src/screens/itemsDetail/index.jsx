import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from "./style";
import DETAILS from '../../contants/data/details.json'




const ItemDetail = () => {


    const product = DETAILS.find((product) => product.id === 1);

  return (
    <View style={styles.container}>
    
       
        <Text style={styles.text} > {product.name}</Text>
        <Text style={styles.text}> {product.description}</Text>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: product.image,
        }}
      />
      <Text style={styles.text}> precio =  {product.price} dolares</Text>
       
    </View>
  )
}

export default ItemDetail;