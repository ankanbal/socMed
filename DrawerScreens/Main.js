/*import React from "react";
import { Text, View, Button } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../ScreenTabs/Home";
import Settings from "../ScreenTabs/Settings";
import Chat from "../ScreenTabs/Chat";
import Trending from "../ScreenTabs/Trending";
import Notifications from "../ScreenTabs/Notifications";


const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon color={tintColor} size={24} name="ios-home" />
          </View>
        ),
      },
    },
    Trending: {
      screen: Trending,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <View>
            <Icon
              color={tintColor}
              size={24}
              name={focused ? "md-trending-up" : "ios-trending-up"}
            />
          </View>
        ),
      },
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <View>
            <Icon
              color={tintColor}
              size={24}
              name={focused ? "ios-chatbubbles" : "md-chatbubbles"}
            />
          </View>
        ),
      },
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <View>
            <Icon
              color={tintColor}
              size={24}
              name={focused ? "ios-notifications" : "ios-notifications-outline"}
            />
          </View>
        ),
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <View>
            <Icon
              name={focused ? "ios-list-box" : "ios-list"}
              size={24}
              color={tintColor}
            />
          </View>
        ),
      },
    },
  },

  {
    InitialRouteName: "Home",
    activeColor: "blue",
    inactiveColor: "gray",
  }
);

export default createAppContainer(TabNavigator);

*/

import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../ScreenTabs/Home";
import Settings from "../ScreenTabs/Settings";
import Chat from "../ScreenTabs/Chat";
import Trending from "../ScreenTabs/Trending";
import Notifications from "../ScreenTabs/Notifications";

const Tab = createBottomTabNavigator();

export default class Main extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home";
            } else if (route.name === "Trending") {
              iconName = focused ? "md-trending-up" : "ios-trending-up";
            } else if (route.name === "Chat") {
              iconName = focused ? "ios-chatbubbles" : "md-chatbubbles";
            } else if (route.name === "Notifications") {
              iconName = focused
                ? "ios-notifications"
                : "ios-notifications-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          initialRouteName: "Home",
          activeTintColor: "blue",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Trending" component={Trending} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    );
  }
}
