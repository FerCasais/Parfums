import { NavigationContainer } from "@react-navigation/native";

import ShopNavigator from "./shop";

function RouteNavigation () {
    return (
        <NavigationContainer>
            <ShopNavigator/>
        </NavigationContainer>

    )

}

export default RouteNavigation;