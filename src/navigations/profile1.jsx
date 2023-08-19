import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/profile";
import { COLORS } from "../utils/colors";
import { TouchableOpacity, Text, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { logout } from '../store/auth/auth.slice';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
       
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 28,
            color: COLORS.white,
            fontFamily: "dancing-bold",
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.icon} onPress={() => dispatch(logout())}>
              <Ionicons name="ios-log-out-outline" size={24} color={COLORS.white} /><Text style={styles.logout}>Log Out</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;

const styles = StyleSheet.create({

  icon: {
    marginRight: Platform.OS === 'android' ? 15 : 0,
  },
  logout: {
    color: COLORS.white,
  }
});
