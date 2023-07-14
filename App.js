import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomNavigation from "./src/components/BottomNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <BottomNavigation />
      </SafeAreaProvider>
    </Provider>
  );
}
