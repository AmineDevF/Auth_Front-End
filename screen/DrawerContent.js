import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Title, Caption, Paragraph, Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../src/AuthProvider";

export function DrawerContent(props) {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("Profile");
                }}
              >
                <Avatar.Image
                  source={{
                    uri: `${user?.photo}`,
                  }}
                  size={50}
                />
              </TouchableOpacity>
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>
                  {user.nom} {user.prenom}
                </Title>
                <Caption style={styles.caption}>{user.email}</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Caption style={[styles.paragraph, styles.caption]}>
                  User (ID){" "}
                </Caption>
                <Paragraph
                  style={styles.caption}
                  style={[styles.paragraph, styles.caption]}
                >
                  {user.id}
                </Paragraph>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="cog" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate("SettingsScreen");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => logout()}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
});
