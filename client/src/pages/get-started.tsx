import { motion } from "framer-motion";
import TempoLogo from "@/components/tempo-logo";
import { useScreenNavigation } from "@/hooks/use-screen-navigation";

export default function GetStartedScreen() {
  const { navigateToScreen } = useScreenNavigation();

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="gradient-bg-alt min-h-screen min-h-[100dvh] flex flex-col justify-center items-center mobile-content"
    >
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <TempoLogo size="md" className="mr-3" />
          <h1 className="text-responsive-lg font-bold text-white">tempo</h1>
        </div>
      </div>
      
      <div className="w-full space-y-4 sm:space-y-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="tempo-button w-full btn-responsive rounded-full text-white font-semibold shadow-lg"
          onClick={() => navigateToScreen("/signup")}
        >
          Get Started
        </motion.button>
        
        <div className="text-center">
          <span className="text-gray-400">Already have an account? </span>
          <button 
            className="text-tempo-orange font-semibold hover:text-tempo-orange-light transition-colors"
            onClick={() => {
              // TODO: Navigate to login screen
              console.log("Navigate to login");
            }}
          >
            Login
          </button>
        </div>
        
        {/* Development Navigation Helper */}
        <div className="mt-6 sm:mt-8 text-center text-xs text-gray-500 space-y-2">
          <div>Quick Navigation:</div>
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-1 sm:gap-2 justify-center">
            <button 
              onClick={() => navigateToScreen("/")} 
              className="px-2 py-1 bg-gray-700 rounded text-white text-xs"
            >
              Splash
            </button>
            <button 
              onClick={() => navigateToScreen("/signup")} 
              className="px-2 py-1 bg-gray-700 rounded text-white text-xs"
            >
              Signup
            </button>
            <button 
              onClick={() => navigateToScreen("/email")} 
              className="px-2 py-1 bg-gray-700 rounded text-white text-xs"
            >
              Email
            </button>
            <button 
              onClick={() => navigateToScreen("/otp")} 
              className="px-2 py-1 bg-gray-700 rounded text-white text-xs"
            >
              OTP
            </button>
            <button 
              onClick={() => navigateToScreen("/welcome")} 
              className="px-2 py-1 bg-gray-700 rounded text-white text-xs"
            >
              Welcome
            </button>
            <button 
              onClick={() => navigateToScreen("/profile-setup")} 
              className="px-2 py-1 bg-gray-700 rounded text-white text-xs"
            >
              Profile
            </button>
            <button 
              onClick={() => navigateToScreen("/preferences")} 
              className="px-2 py-1 bg-gray-700 rounded text-white text-xs"
            >
              Preferences
            </button>
            <button 
              onClick={() => navigateToScreen("/location")} 
              className="px-2 py-1 bg-gray-700 rounded text-white text-xs"
            >
              Location
            </button>
            <button 
              onClick={() => navigateToScreen("/friends")} 
              className="px-2 py-1 bg-gray-700 rounded text-white text-xs"
            >
              Friends
            </button>
            <button 
              onClick={() => navigateToScreen("/photo-capture")} 
              className="px-2 py-1 bg-gray-700 rounded text-white text-xs"
            >
              Photo
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
