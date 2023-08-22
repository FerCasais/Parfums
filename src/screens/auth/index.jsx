import React,  { useState }  from "react";
import {
  TouchableOpacity,
  Image,
  TouchableHighlight,
  View,
  Text,
  TextInput,
  ImageBackground,
} from "react-native";

import { useDispatch } from "react-redux";
import { styles } from "./styles";
import { useSignInMutation, useSignUpMutation } from "../../store/auth/api";
import { setUser } from "../../store/auth/auth.slice";
import * as ImagePicker from "expo-image-picker";
import { db } from "../../confij";
import { ref, push } from "firebase/database";
import { validationSchema } from "../../validations/userValidation";
import { Formik } from "formik";



const Auth = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const headerTitle = isLogin ? "Login" : "Register";
  const messageText = isLogin ? "Need an account?" : "Already have an account?";
  const [image, setImage] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [signIn, { data }] = useSignInMutation();
  const [signUp] = useSignUpMutation();
  const [register, setRegister] = useState()
  const [loginIn, setLoginIn] = useState()


 dispatch(setUser(data));

  
  const handleSubmit = async (values) => {

    

    try {
      if(isLogin) {
        await signIn({ email: values.email, password: values.password });
       
       
      } else {
          await signUp({ email: values.email, password: values.password });
          push(ref(db, "user/"), {
            name: values.name,
            email: values.email,
            image: image
            
          });
    
      }
    } catch (error) {
         console.error(error);
       }
 
  };

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
      alert("You did not select any image.");
    }
  };

  const imageBack = {
    uri: "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/0dcf/425a/13a9/dc0d/f5f3/f108/b986/85ee/eff1/70bf/70bf.jpg",
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={imageBack}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.textBanner}> Boutique des Parfums</Text>
        </ImageBackground>

       

        <View style={styles.content}>
          <Text style={styles.header}>{headerTitle}</Text>

          <View>
          <Formik
      initialValues={{ name: "", email: "", password: "", image: "",}}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit, values, errors, isValid }) => (
        <View>
          <TextInput
            onChangeText={handleChange("name")}
            value={values.name}
            placeholder="Nombre"
            style={styles.input}
          />
          {errors.name && (
            <Text style={styles.errorText}>{errors.name}</Text>
          )}

          <TextInput
            onChangeText={handleChange("email")}
            value={values.email}
            placeholder="Email"
            style={styles.input}
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          <TextInput
            onChangeText={handleChange("password")}
            value={values.password}
            placeholder="Contraseña"
            secureTextEntry
            style={styles.input}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

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
            uri: "https://media.gq.com.mx/photos/64a86e064f935b27f4b8a849/16:9/w_2560%2Cc_limit/Ryan_Gosling_Barbie-1521056899.jpg",
          }}
        />
      </View>
    </View>
    </View>

<View style={styles.buttonContainer}>
      <TouchableHighlight style={styles.button} onPress={pickImage}>
        <Text style={styles.text}>Add your avatar?</Text>
      </TouchableHighlight>
    </View>

          <View style={styles.buttonContainer}>
            <TouchableHighlight
              style={styles.button}
              onPress={handleSubmit}
              disabled={!isValid || submitting}
            >
              <Text style={styles.text}>Submit</Text>
            </TouchableHighlight>
          </View>
        </View>
      )}
       
    </Formik>
  </View>

         
          <View style={styles.linkContainer}>
            <TouchableOpacity
              style={styles.link}
              onPress={() => setIsLogin(!isLogin)}
            >
              <Text style={styles.linkText}>{messageText}</Text>
            </TouchableOpacity>
          </View>

         
          
          
          <View style={styles.buttonContainer}></View>
        </View>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: 90,
                height: 90,
                borderRadius: 100,
                marginBottom: 20,
              }}
            />
          )}
        </View>
      </View>
    </>
  );
};
export default Auth;
