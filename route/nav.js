import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../src/screens/Home";
import Page2 from "../src/screens/Page2";
import ScreensName from "./ScreensName";


const MainNavigation = () => {

    const Stack = createNativeStackNavigator();


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={ScreensName.home} component={Home} />
                <Stack.Screen name={ScreensName.page2} component={Page2} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default MainNavigation ; 