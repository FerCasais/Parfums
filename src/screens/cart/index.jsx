import { View, Text, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { CartItem } from '../../components';
import { useSelector, useDispatch} from 'react-redux';
import { add, decrease, deleteSelection, clearCart } from '../../store/cart/cartSlice';
import { useCreateOrderMutation } from '../../store/orders/apis';




const Cart = ({navigation}) => {

  const dispatch = useDispatch ()

  const cart = useSelector((state) => state.cart.items)

  const onDeleteSelection = (id) => {
    dispatch(deleteSelection(id));
  };

  const onAdd = (id) => {
    dispatch(add({id}));
  };

  const onDecrease = (id) => {
    dispatch(decrease({id}));
  };

  const makeOrder = () => {
    alert('Order coming');
  }

  const [createOrder, { data, isError, error, isLoading }] = useCreateOrderMutation();

  const total = useSelector((state) => state.cart.total);

  const totalItems = useSelector((state) => state.cart.quantity);

  // const onCreateOrder = async () => {
  //   const newOrder = {
  //     id: Math.floor(Math.random() * 1000),
  //     items: cart,
  //     total,
  //     user: {
  //       id: 1,
  //       name: 'John Doe',
  //       address: '123 Street',
  //       phone: '123456789',
  //       email: 'johndoe@gmail.com',
  //     },
  //     payment: {
  //       method: 'VISA',
  //     },
  //     delivery: {
  //       method: 'UPS',
  //       trackingNumber: Math.floor(Math.random() * 1000),
  //     },
  //     createAt: Date.now(),
  //     finishedAt: '',
  //   };
  //   try {
  //     await createOrder(newOrder);
  //     dispatch(clearCart());
  //     navigation.navigate('OrdersTab');
  //   } catch (e) {
  //     console.warn({ error, e });
  //   }
  // };



  if (cart.length === 0) {
    return (
      <View style={styles.emptyCartContainer}>
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      </View>
    );
  }


 
 
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartItem {...item } onAdd={onAdd} onDecrease={onDecrease} onDeleteSelection={onDeleteSelection}/> }
        keyExtractor={(item) => item.id.toString()}
        style={styles.listContainer}
      />
       <View style={styles.cartResume}>
          <Text style={styles.orderButtonText}>´ USD: $ {total}  ´ 
          
          </Text>
          <Text style={styles.orderButtonText}>
          ´ Total Items:  {totalItems}  ´ 
          </Text>
        </View>
        <View style={styles.orderButton} >
        
          <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.orderTouch}>
            <Text style={styles.orderButtonText}>Confirmar compra</Text>
          </TouchableOpacity>
        </View>
      
    </View>
  );
};

export default Cart;