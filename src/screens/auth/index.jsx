import React from "react";
import { useState, useEffect } from "react";
import { TouchableOpacity, Image, TouchableHighlight, Keyboard,  TouchableWithoutFeedback, View, Text, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { requestMediaLibraryPermissionsAsync } from "expo-image-picker";

import { styles } from "./styles";
import { COLORS } from "../../utils/colors";
import { useSignInMutation, useSignUpMutation } from "../../store/auth/api";
import { setUser } from "../../store/auth/auth.slice";

import * as ImagePicker from "expo-image-picker";
import { db } from "../../confij";
import { ref, push } from "firebase/database";

const Auth = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const headerTitle = isLogin ? "Login" : "Register";
  const buttonTitle = isLogin ? "Login" : "Register";
  const messageText = isLogin ? "Need an account?" : "Already have an account?";


  const [name1, setName1] = useState("");
  const [email1, setEmail1] = useState("");

  const [signIn, { data }] = useSignInMutation();

  const [signUp] = useSignUpMutation();

  const onHandlerAuth = async () => {
    try {
      if (isLogin) {
        await signIn({ email, password });
      } else {
        await signUp({ email, password });

        push(ref(db, "user/"), {
          name1: name,
          email1: email,
          image: image,
        });
        setName1("");
        setEmail1("");
        setImage("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // TODO: cambiar este useEffect por un selector custom
  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data]);

  ///

  const [image, setImage] = useState(null);

 const pickImage = async () => {

  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    quality: 1,
    aspect: [4, 3],
  });
    
  if (!result.canceled) {
    setImage(result.assets[0].uri);
    console.log(result);
 
  } else {
    alert('You did not select any image.');
  }
};


  
  return (
    <>
    
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.header}>{headerTitle}</Text>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="email@domain.com"
            placeholderTextColor={COLORS.gray}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setEmail(text)}
            value={email}
           
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="*********"
            placeholderTextColor={COLORS.gray}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          
          />
          <TextInput
            style={styles.input}
            placeholder="name"
            placeholderTextColor={COLORS.gray}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setName(text)}
            value={name}
          
          />
          <View style={styles.linkContainer}>
            <TouchableOpacity
              style={styles.link}
              onPress={() => setIsLogin(!isLogin)}
            >
              <Text style={styles.linkText}>{messageText}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonAvatar}>
              <View style={styles.avatarContainer}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: "https://images.hola.com/images/0278-15fbc2acd477-2ed5a36ac103-1000/horizontal-mobile-800/quot-once-upon-a-time-in-hollywood-quot-photocall-the-72nd-annual-cannes-film-festival.jpg",
                  }}
                />
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: "https://hips.hearstapps.com/hmg-prod/images/ryan-gosling-attends-the-barbie-european-premiere-at-news-photo-1691225102.jpg?crop=1xw:0.37238xh;center,top&resize=1200:*",
                  }}
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableHighlight style={styles.button} onPress={pickImage}>
                <Text style={styles.text}>Add your avatar?</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onHandlerAuth}>
              <Text style={styles.buttonText}>{buttonTitle}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 160, height: 160 }}
            />
          )}
        </View>
      </View>
    
    </>
  );
};
export default Auth;
