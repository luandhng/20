import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import { GeofencingEventType } from "expo-location";
import { supabase } from "../utils/supabase";

type GeofencingTaskData = {
  eventType: Location.GeofencingEventType;
  region: Location.GeofencingRegionState;
};

type GeofencingTaskError = {
  message: string;
};

const YOUR_TASK_NAME = "GEOFENCING_TASK";

TaskManager.defineTask(
  YOUR_TASK_NAME,
  ({
    data,
    error,
  }: {
    data: GeofencingTaskData;
    error: GeofencingTaskError | null;
  }) => {
    if (error) {
      console.error("Geofencing error:", error.message);
      return;
    }
    const { eventType, region } = data;
    if (eventType === GeofencingEventType.Enter) {
      console.log("You've entered region:", region);
    } else if (eventType === GeofencingEventType.Exit) {
      console.log("You've left region:", region);
    }
  }
);

export default function CheckLocation() {
  const [locations, setLocations] = useState<any>([]);
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let { granted } = await Location.requestBackgroundPermissionsAsync();
      if (granted && status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);

        let { data: locations } = await supabase.from("locations").select("*");
        setLocations(locations);

        locations.forEach(async (item) => {
          await Location.startGeofencingAsync("REGIONS", [
            {
              identifier: item.name,
              latitude: item.lat,
              longitude: item.lng,
              radius: item.radius,
            },
          ]);
        });

        checkIfInsideGeofence(location, locations);
      }
    })();
  }, []);

  useEffect(() => {
    if (isInside) {
      PunchTime();
    } else {
    }
  }, [isInside]);

  const PunchTime = async () => {
    await supabase
      .from("punch_time")
      .insert([{ name: "Tim", location: "DSG Signs Graphics" }]);
  };

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // Earth’s mean radius in meters
    const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // in meters
    return distance;
  };

  const checkIfInsideGeofence = (userLocation, regions) => {
    if (!userLocation) return false;

    const isInside = regions.some((region) => {
      const distance = getDistance(
        userLocation.coords.latitude,
        userLocation.coords.longitude,
        region.lat,
        region.lng
      );

      return distance <= region.radius;
    });

    setIsInside(isInside);
  };

  return (
    <View className="h-full">
      <View
        className={`${
          isInside ? "bg-blue-600" : "bg-red-600"
        } h-full flex justify-center pt-8 items-center`}
      >
        <Text className="text-2xl text-white">
          {isInside ? "You are in the zone" : "You are not in the zone"}
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
