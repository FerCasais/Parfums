import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories } from "../screens";
import StartPage from "../screens/startPage";
import Products from "../screens/products";
import { COLORS } from "../utils/colors";

const Stack = createNativeStackNavigator()

function ShopNavigator( ) {



    return (
        <Stack.Navigator initialRouteName="StartPage">
        <Stack.Screen 
        name='StartPage' 
        component={StartPage}
        options={{
            headerTitleAlign: 'center',
           headerShown: false,
        }
        

        }
        />
        <Stack.Screen name='Brands' component={Categories}
           options={{
            title: 'Brands',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.primary,
       
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            
              fontSize: 28,

              color: COLORS.white,
              fontFamily: "dancing-bold",
              
            },
          }}
          />
        <Stack.Screen name='Products' component={Products}
        options={ ({navigation, route} ) => ({ 
           
            headerTitleAlign: 'center',
           
            headerStyle: {
              backgroundColor: COLORS.primary,
              
       
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            
              fontSize: 28,

              color: COLORS.black,
              fontFamily: "dancing-bold",
              
            },
            title: (route.params.name + ' Parfums')
          })}
        />
        </Stack.Navigator>

    )
}

export default ShopNavigator;