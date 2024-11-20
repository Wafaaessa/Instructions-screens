import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnboardingScreen from "./../../OnboardingScreen/OnboardingScreen";
import HomeScreen from "./../../HomeScreen/HomeScreen";

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(null);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const hasSeenOnboarding = await AsyncStorage.getItem("hasSeenOnboarding");
      setShowOnboarding(hasSeenOnboarding === null);
    };
    checkOnboardingStatus();
  }, []);

  const handleFinishOnboarding = async () => {
    await AsyncStorage.setItem("hasSeenOnboarding", "true");
    setShowOnboarding(false);
  };
  if (showOnboarding === null) {
    return null;
  }

  return showOnboarding ? (
    <OnboardingScreen onFinish={handleFinishOnboarding} />
  ) : (
    <HomeScreen />
  );
}
