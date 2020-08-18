/*import * as React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import Main from "./DrawerScreens/Main";
import Account from "./DrawerScreens/Account";
import Notifications from "./ScreenTabs/Notifications";

const Drawer = createDrawerNavigator(
  {
    Home: Main,
    Notifications: Notifications,
    Account: Account,
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(Drawer);
*/
import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Main from "./DrawerScreens/Main";
import Notifications from "./ScreenTabs/Notifications";

const Drawer = createDrawerNavigator();

export default class DrawerMain extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Main} />
        <Drawer.Screen name="Notifications" component={Notifications} />
      </Drawer.Navigator>
    );
  }
}
