/*import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./Login";
import Register from "./Register";
import Main from "./DrawerScreens/Main";
import Account from "./DrawerScreens/Account";
import DrawerMain from "./DrawerMain";
import Notifications from "./ScreenTabs/Notifications";


const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    Main: Main,
    DrawerMain: DrawerMain,
    Account: Account,
    Notifications: Notifications,
  },
  {
    headerMode: "none",
  }
);

export default createAppContainer(AppNavigator);
*/

import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login";
import Register from "./Register";
import Main from "./DrawerScreens/Main";
import DrawerMain from "./DrawerMain";

const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="DrawerMain" component={DrawerMain} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
