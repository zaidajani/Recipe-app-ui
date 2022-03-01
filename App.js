import React from "react";
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from "./src/features/home/screens/home.screen";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SavedScreen } from "./src/features/home/screens/saved.screen";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "md-home";
            } else if (route.name === "Saved") {
              iconName = "md-heart";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#FC5252",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Saved" component={SavedScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

