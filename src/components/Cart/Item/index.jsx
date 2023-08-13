import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import { COLORS } from "../../../utils/colors";

const CartItem = ({
  id,
  categoryId,
  name,
  price,
  image2,
  currency,
  quantity,
  stock,
 onAdd,
 onDecrease,
 onDeleteSelection,
  ...props
}) => {


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image2 }} style={styles.image} />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{`${currency.code} ${price}`}</Text>
        <Text
          style={styles.qty}
        >{`qty: ${quantity} stock: ${stock}`}</Text>
        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={styles.increaseButton}
            onPress={() => onAdd(id)}
          >
            <Text style={styles.increaseButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.decreaseButton}
            onPress={() => onDecrease(id)}
          >
            <Text style={styles.decreaseButtonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onDeleteSelection(id)}
            style={styles.deleteButton}
          >
            <Ionicons name="trash" size={14} color={COLORS.white} />
          </TouchableOpacity>
        </View>
       
      </View>
    </View>
  );
};

export default CartItem;