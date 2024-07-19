import { useState, useEffect } from "react";
import Auth from "./components/Auth";

import { View } from "react-native";
import { Session } from "@supabase/supabase-js";
import { supabase } from "./utils/supabase";
import Account from "./components/Account";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <View className="h-full bg-neutral-100">
      {session && session.user ? <Account /> : <Auth />}
    </View>
  );
}

// key={session.user.id} session={session}
