import { View, Text } from "react-native";
import { styles } from "./styles";
import { FlatList, Image } from "react-native";
import { useGetProfileQuery } from "../../store/profiles/apis";

const Profile = () => {
  const { data, error, isLoading } = useGetProfileQuery();

  const renderItem = ({ item }) => (
    <>
      <View style={styles.container}>
        <View style={styles.contentProfile}>
          <Text style={styles.text}>{item.name1}</Text>
          <Text style={styles.text1}>{item.email1}</Text>
        </View>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
    </>
  );

  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Profile;
