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
      className="gradient-bg-alt min-h-screen flex flex-col justify-center items-center px-8"
    >
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-8">
          <TempoLogo size="md" className="mr-3" />
          <h1 className="text-2xl font-bold text-white">tempo</h1>
        </div>
      </div>
      
      <div className="w-full max-w-sm space-y-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="tempo-button w-full py-4 px-6 rounded-full text-white font-semibold text-lg shadow-lg"
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
      </div>
    </motion.div>
  );
}
