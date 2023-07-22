import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'

const Header = ({title}) => {
  return (
 <View style={styles.titleContainer}>
    <Text style={styles.titleText}>{title}</Text>

 </View>
  )
}

export default Header
