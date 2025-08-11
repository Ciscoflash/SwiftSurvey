import { motion } from "framer-motion";
import TempoLogo from "@/components/tempo-logo";
import { useScreenNavigation } from "@/hooks/use-screen-navigation";

export default function WelcomeScreen() {
  const { navigateToScreen } = useScreenNavigation();

  const handleSetupAccount = () => {
    navigateToScreen("/profile-setup");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="gradient-bg min-h-screen min-h-[100dvh] flex flex-col items-center justify-center mobile-content"
    >
      {/* Skip ahead button */}
      <div className="absolute top-16 right-8">
        <button 
          className="text-white/70 text-sm hover:text-white transition-colors"
          onClick={() => {
            // TODO: Skip to main app
            console.log("Skip ahead");
          }}
        >
          Skip ahead
        </button>
      </div>
      
      {/* Welcome Content */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <TempoLogo size="lg" animate />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-responsive-xl font-bold text-white mb-4"
        >
          Welcome to Tempo
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-responsive-lg font-bold text-white mb-6"
        >
          Champ 🔥
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-300 text-base leading-relaxed max-w-sm mx-auto"
        >
          Lets finish setting up your account, 
          we promise this wont take long ⚡
        </motion.p>
      </div>
      
      {/* Progress indicator */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "96px" }}
        transition={{ duration: 1, delay: 0.8 }}
        className="h-1 bg-white/30 rounded-full mx-auto mb-12"
      />
      
      {/* Setup Account Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="w-full"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="tempo-button w-full btn-responsive rounded-full text-white font-semibold shadow-lg"
          onClick={handleSetupAccount}
        >
          Setup Account
        </motion.button>
      </motion.div>
    </motion.div>
  );
}