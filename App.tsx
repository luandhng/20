import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="bg-red-500 h-full flex justify-center items-center">
      <Text className="text-xl text-white font-medium">
        Please arrive at the location
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
