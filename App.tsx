import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="bg-red-600 h-full flex justify-center items-center">
      <Text className="text-xl text-white font-medium">
        You are not in the zone
      </Text>
      {/* <Workers /> */}
      <StatusBar style="auto" />
    </View>
  );
}
