import React, { useRef, useEffect} from "react";
import { Animated, Text, TouchableHighlight, View} from "react-native";
import { COLORS } from "../../utils/colors";
import { styles } from "./style";
import { Ionicons } from '@expo/vector-icons';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View 
      style={{
        ...props.style,
        opacity: fadeAnim, 
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default function StartPage({ navigation }) {
 
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.black,
      }}
    >
        <View>
        <View>
          <Text style={styles.text}> Boutique des Parfums </Text>
          </View>
       
      </View>
      <FadeInView
        style={{
          width: 250,
          height: 150,
        
        }}
      >
         <TouchableHighlight onPress={() => navigation.navigate("Brands")}>
        <View style={styles.buttonEnter}>
        
          <Text 
            style={styles.botonIngresar}
          >
           See our Brands
          </Text>
          {/* <Ionicons name="md-push-outline" size={24} color={COLORS.primary} /> */}
        </View>
        </TouchableHighlight>
      
       </FadeInView>
    
    </View>
  );
}
