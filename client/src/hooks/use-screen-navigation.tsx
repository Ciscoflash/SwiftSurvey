import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export function useScreenNavigation() {
  const [location, setLocation] = useLocation();
  const [currentScreen, setCurrentScreen] = useState(location);

  useEffect(() => {
    setCurrentScreen(location);
  }, [location]);

  const navigateToScreen = (screen: string) => {
    setLocation(screen);
  };

  const navigateWithDelay = (screen: string, delay: number) => {
    setTimeout(() => {
      navigateToScreen(screen);
    }, delay);
  };

  return {
    currentScreen,
    navigateToScreen,
    navigateWithDelay
  };
}
