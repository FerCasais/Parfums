import { NavigationContainer } from "@react-navigation/native";

import ShopNavigator from "./shop";
import TabsNavigator from "./tab";

function RouteNavigation () {
    return (
        <NavigationContainer>
           
            <TabsNavigator/>
        </NavigationContainer>

    )

}

export default RouteNavigation;