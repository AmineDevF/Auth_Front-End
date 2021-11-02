import React from "react";

import { DrawerContent } from "../screen/DrawerContent";
import MainTabScreen from "../screen/MainTabScreen";

import SettingsScreen from "../screen/SettingsScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export const AppStack = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
