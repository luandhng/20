import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { supabase } from "../utils/supabase";

export const locations = () => {
  const [locations, setLocations] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      let { data: locations } = await supabase.from("locations").select("*");
      setLocations(locations);
    };

    fetchData();
  }, []);

  return (
    <View>
      {locations?.map((item: any, index: number) => (
        <Text key={index}>{item.name}</Text>
      ))}
    </View>
  );
};
