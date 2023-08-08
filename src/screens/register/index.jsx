import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../utils/colors';


import React, { useState } from "react";
import {
 Image,
  View,
Text,
  TextInput,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import { AvatarPicker } from '../../components';



const AddUserScreen = (props) => {
  const initalState = {
    name: "",
    email: "",
    phone: "",
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === "") {
      alert("please provide a name");
    } else {

      try {
        await firebase.db.collection("users").add({
          name: state.name,
          email: state.email,
          phone: state.phone,
        });

        props.navigation.navigate("UsersList");
      } catch (error) {
        console.log(error)
      }
    }
  };

  const onHandlerImage =  ({ uri, base64 }) => {
   
   
  };

  return (<>
    <ScrollView style={styles.container}>
      {/* Name Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email}
        />
      </View>

      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="phone"
          onChangeText={(value) => handleChangeText(value, "phone")}
          value={state.phone}
        />
      </View>

      <View style={styles.button}>
        <TouchableHighlight onPress={() => saveNewUser()} style={styles.button}>
          <Text style={styles.text}>Save User</Text>
          </TouchableHighlight>
     
      </View>
     
      
    </ScrollView>

    <View style={styles.container}>
      <View style={styles.header}>
        <AvatarPicker onSelect={onHandlerImage} />
      
        
        
      </View>
    </View>

   <View style={styles.buttonAvatar}>

    <View style={styles.avatarContainer}>

   <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://images.hola.com/images/0278-15fbc2acd477-2ed5a36ac103-1000/horizontal-mobile-800/quot-once-upon-a-time-in-hollywood-quot-photocall-the-72nd-annual-cannes-film-festival.jpg',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://hips.hearstapps.com/hmg-prod/images/ryan-gosling-attends-the-barbie-european-premiere-at-news-photo-1691225102.jpg?crop=1xw:0.37238xh;center,top&resize=1200:*',
        }}/>
        </View>

       
   
  
      <TouchableHighlight style={styles.button} >
    <Text style={styles.text}>Add your avatar?</Text>
    </TouchableHighlight>
   </View>
   </>
  );
};



export default AddUserScreen;

