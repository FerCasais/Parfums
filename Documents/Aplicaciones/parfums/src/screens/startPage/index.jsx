import React, {useRef, useEffect} from 'react';
import {Animated, Button, Text, TouchableHighlight, View} from 'react-native';
import { COLORS } from '../../utils/colors';
import { styles } from "./style";

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 12000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};



// You can then use your `FadeInView` in place of a `View` in your components:
export default function  StartPage ()  {
  return ( 
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.black,
      }}>
      <FadeInView
        style={{
          width: 250,
          height: 50,
          backgroundColor: COLORS.primary,
        }}>
           
        <Text style={{fontSize: 24, textAlign: 'center', margin: 10, fontFamily: 'dancing-bold', }}>
          Boutique des Parfums
        </Text>
      </FadeInView>
      <View>
  
        <View>
        <Text style={styles.botonIngresar}>Brands</Text>
        </View>
    
      </View>
   
     </View>
  );
};