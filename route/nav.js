import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../src/screens/HomeScreen";
import SecondScreen from "../src/screens/SecondScreen";
import ScreensName from "./ScreensName";

const MainNavigation = (
) => {
    
    const Stack = createNativeStackNavigator();
 


    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                < Stack.Screen name={ScreensName.HomeScreen} component={HomeScreen}  options={{headerShown: false}}  />
                <Stack.Screen name={ScreensName.SecondScreen} component={SecondScreen}   />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default MainNavigation ; 