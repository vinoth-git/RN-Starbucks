import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { Provider } from "react-native-paper";
import HomeScreen from "../screens/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ChatScreen from "../screens/chatScreen";

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <Provider>
        <Tab.Navigator
          initialRouteName="Home"
          barStyle={{ backgroundColor: "white" }}
          activeColor={"#0e382c"}
          inactiveColor={"black"}
          tabBarOptions={{
            labelStyle: { fontSize: 16 },
          }}
          shifting={false}
          backBehavior={"history"}
          tabBarStyle={{ backgroundColor: "#000" }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons color={color} name="ios-home-outline" size={24} />
              ),
            }}
          />
          <Tab.Screen
            name="Order"
            component={InProgress}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons color={color} name="ios-cart-outline" size={24} />
              ),
            }}
          />
          <Tab.Screen
            name="Chat"
            component={ChatScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons color={color} name="chatbox-outline" size={24} />
              ),
            }}
          />
        </Tab.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

function InProgress() {
  return <Text>Page is in progress</Text>;
}
