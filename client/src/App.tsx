import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useScreenNavigation } from "@/hooks/use-screen-navigation";
import MobileStatusBar from "@/components/mobile-status-bar";
import SplashScreen from "@/pages/splash";
import GetStartedScreen from "@/pages/get-started";
import SignupScreen from "@/pages/signup";
import EmailInputScreen from "@/pages/email-input";
import OTPVerificationScreen from "@/pages/otp-verification";
import WelcomeScreen from "@/pages/welcome";
import ProfileSetupScreen from "@/pages/profile-setup";
import WelcomePersonalizedScreen from "@/pages/welcome-personalized";
import PreferencesScreen from "@/pages/preferences";
import LocationScreen from "@/pages/location";
import MainAppScreen from "@/pages/main-app";

function Router() {
  const { currentScreen } = useScreenNavigation();

  return (
    <div className="min-h-screen bg-tempo-dark text-white overflow-hidden mobile-safe-area">
      <MobileStatusBar />
      <div className="mobile-container">
        <Switch>
          <Route path="/" component={SplashScreen} />
          <Route path="/get-started" component={GetStartedScreen} />
          <Route path="/signup" component={SignupScreen} />
          <Route path="/email" component={EmailInputScreen} />
          <Route path="/otp" component={OTPVerificationScreen} />
          <Route path="/welcome" component={WelcomeScreen} />
          <Route path="/profile-setup" component={ProfileSetupScreen} />
          <Route path="/welcome-personalized" component={WelcomePersonalizedScreen} />
          <Route path="/preferences" component={PreferencesScreen} />
          <Route path="/location" component={LocationScreen} />
          <Route path="/main-app" component={MainAppScreen} />
        </Switch>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
