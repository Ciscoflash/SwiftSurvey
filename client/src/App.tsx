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

function Router() {
  const { currentScreen } = useScreenNavigation();

  return (
    <div className="min-h-screen bg-tempo-dark text-white overflow-hidden">
      <MobileStatusBar />
      <div className="max-w-sm mx-auto relative h-screen">
        <Switch>
          <Route path="/" component={SplashScreen} />
          <Route path="/get-started" component={GetStartedScreen} />
          <Route path="/signup" component={SignupScreen} />
          <Route path="/email" component={EmailInputScreen} />
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
