import { RegistrationScreen } from "../screens/RegistrationScreen";

import { LoginScreen } from "../screens/LoginScreen";

import { CommentsScreen } from "../screens/CommentsScreen";

import { Home } from "../screens/Home";

import { MapScreen } from "../screens/MapScreen";

import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { useSelector } from "react-redux";

const MainStack = createStackNavigator();

export const Main = () => {
  const userRegister = useSelector((state) => state.auth.userRegister);

  if (userRegister === false)
    return (
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen
            name="Registration"
            options={{ headerShown: false }}
            component={RegistrationScreen}
          />
          <MainStack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={LoginScreen}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    );

  if (userRegister === true)
    return (
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Home">
          <MainStack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Home}
          />
          <MainStack.Screen
            name="CommentsScreen"
            options={{ headerShown: false }}
            component={CommentsScreen}
          />
          <MainStack.Screen
            name="MapScreen"
            options={{ headerShown: false }}
            component={MapScreen}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    );
};