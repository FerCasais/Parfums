import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Messages from "../screens/messages";
import { COLORS } from "../utils/colors";

const Stack = createNativeStackNavigator();

const MessagesNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Messages">
      <Stack.Screen
        name="Messages"
        component={Messages}
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
        }}
      />
    </Stack.Navigator>
  );
};

export default MessagesNavigator;
