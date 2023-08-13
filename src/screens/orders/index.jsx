import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "./style";
import { FlatList } from 'react-native';
import { OrderItem } from '../../components';
import { useGetOrdersQuery } from '../../store/orders/apis';

const Orders = ({navigation}) => {
  const { data, error, isLoading } = useGetOrdersQuery();

  const renderItem = ({ item }) => <OrderItem {...item} />;

  const keyExtractor = (item) => item.id.toString();
  
  return (
    <View style={styles.container}>
      <View>
        <TouchableHighlight onPress={()=> navigation.navigate('Messages')}>
          <View style={styles.goToMessageContainer}>
          <Text style={styles.textButton}>Queres dejar un comentario?</Text>
          </View>
        </TouchableHighlight>
      </View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Orders;
