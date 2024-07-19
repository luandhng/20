import React, { useState } from "react";
import { Alert, View, AppState, TextInput, Button } from "react-native";

import { supabase } from "../utils/supabase";

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  return (
    <View className="flex items-center justify-center h-full">
      <View className="">
        <TextInput
          className="border p-1 px-3 w-56 rounded-full border-neutral-400"
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Email"
          autoCapitalize={"none"}
        />
      </View>
      <View>
        <TextInput
          className="border p-1 mt-2 px-3 w-56 rounded-full border-neutral-400"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={"none"}
        />
      </View>
      <View className="mt-2 w-56">
        <Button
          title="Sign in"
          disabled={loading}
          onPress={() => signInWithEmail()}
        />
      </View>
      <View className="mt-2 w-56">
        <Button
          title="Sign up"
          disabled={loading}
          onPress={() => signUpWithEmail()}
        />
      </View>
    </View>
  );
}
