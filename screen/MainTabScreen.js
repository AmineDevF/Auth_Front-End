import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import ProfileScreen from "./ProfileScreen";
import EditProfileScreen from "./EditProfileScreen";

import { useTheme } from "react-native-paper";
import { View } from "react-native-animatable";

const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Profile" activeColor="#fff">
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#694fad",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={EditProfileScreen}
      options={{
        tabBarLabel: "Edite",
        tabBarColor: "#1f65ff",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-add-circle" color={color} size={27} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const ProfileStackScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#7342ed",
          shadowColor: colors.background,
          elevation: 0,
        },
        headerTintColor: colors.text,
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "",
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor="#7342ed"
                color="#ccc"
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor="#7342ed"
                color="#ccc"
                onPress={() => navigation.navigate("EditProfile")}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: "Edit Profile",
        }}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};
