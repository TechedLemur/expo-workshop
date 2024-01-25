import { View, Text } from "react-native";
import React from "react";
import { Slot, useRouter } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import Colors from "@/constants/Colors";

export default function ProfileLayout() {
  const router = useRouter();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerActiveTintColor: Colors.primaryRed,
          headerTintColor: Colors.white,
          headerBackground: () => (
            <View style={{ flex: 1, backgroundColor: Colors.primaryRed }} />
          ),
          sceneContainerStyle: { backgroundColor: Colors.primaryCreamWhite },
        }}
        drawerContent={(props) => (
          <>
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem
                label="About"
                onPress={() => router.push("/(modals)/about")}
              />
            </DrawerContentScrollView>
            <DrawerItem label={"Log out"} onPress={() => router.replace("/")} />
          </>
        )}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Profile",
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
