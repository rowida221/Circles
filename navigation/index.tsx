/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, Image } from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import logo from "../assets/images/logo.png";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import Home from "../screens/Home";
import Personas from "../screens/Personas";
import Sketches from "../screens/Sketches";
import Critique from "../screens/Critique";
import Technologies from "../screens/Technologies";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { colors } from "react-native-elements";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Personas"
        component={Personas}
        options={{
          title: "Personas",
          headerShown: false,
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "white",
          tabBarActiveBackgroundColor: "#710603",
          tabBarInactiveBackgroundColor: "#0F003A",
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-person-circle-outline" size={30} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Sketches"
        component={Sketches}
        options={{
          title: "Sketches",
          headerShown: false,
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "white",
          tabBarActiveBackgroundColor: "#710603",
          tabBarInactiveBackgroundColor: "#0F003A",
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-newspaper" size={30} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Goal",
          headerShown: false,
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "white",
          tabBarActiveBackgroundColor: "#710603",
          tabBarInactiveBackgroundColor: "#0F003A",
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="google-circles"
              size={30}
              color={color}
            />
          ),
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate("Modal")}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}
          //   >
          //     <FontAwesome
          //       name="info-circle"
          //       size={25}
          //       color={Colors[colorScheme].text}
          //       style={{ marginRight: 15 }}
          //     />
          //   </Pressable>
          // ),
        })}
      />

      <BottomTab.Screen
        name="Critique"
        component={Critique}
        options={{
          title: "Critique",
          headerShown: false,
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "white",
          tabBarActiveBackgroundColor: "#710603",
          tabBarInactiveBackgroundColor: "#0F003A",
          tabBarLabelStyle: {
            fontSize: 13,
          },

          tabBarIcon: ({ color }) => (
            <MaterialIcons name="thumbs-up-down" size={30} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Technologies"
        component={Technologies}
        options={{
          title: "Technologies",
          headerShown: false,
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "white",
          tabBarActiveBackgroundColor: "#710603",
          tabBarInactiveBackgroundColor: "#0F003A",
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="monitor-cellphone"
              size={30}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
