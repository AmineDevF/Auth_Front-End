import React, { useContext } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../src/AuthProvider";

const ProfileScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image source={{ uri: `${user?.photo}` }} size={80} />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              {user?.nom}
            </Title>
            <Caption style={styles.caption}>{user.email}</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Ionicons name="navigate-outline" color="#777777" size={20} />

          <Text style={{ color: "#777777", marginLeft: 20 }}>
            {user.adresse}
          </Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="mail-outline" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>{user.email}</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: "#dddddd",
              borderRightWidth: 1,
            },
          ]}
        >
          <Title>
            {user.company ? (
              user.company
            ) : (
              <Text style={{ color: "#777777" }}>Civilité</Text>
            )}{" "}
          </Title>
        </View>
        <View style={styles.infoBox}>
          <Title>{user.civilité}</Title>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name="ios-person-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>{user.nom}</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name="md-person" color="#FF6347" size={25} />

            <Text style={styles.menuItemText}>{user.prenom}</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple>
          <View style={styles.menuItem}>
            <Ionicons name="business-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>{user.ville}</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name="mail-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>{user.email}</Text>
          </View>
        </TouchableRipple>

        <View style={styles.menuItem}>
          <Ionicons name="thumbs-up-outline" color="#FF6347" size={25} />
          <Text style={styles.menuItemText}>{user.civilité}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
