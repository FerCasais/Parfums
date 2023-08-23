import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Auth } from '../screens';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="auth"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="auth" component={Auth} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;