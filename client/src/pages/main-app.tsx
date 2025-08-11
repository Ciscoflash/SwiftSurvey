import { motion } from "framer-motion";
import TempoLogo from "@/components/tempo-logo";

export default function MainAppScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="gradient-bg min-h-screen min-h-[100dvh] flex flex-col items-center justify-center mobile-content"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <TempoLogo size="lg" animate />
      </motion.div>
      
      {/* Success Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mb-12"
      >
        <h1 className="text-responsive-xl font-bold text-white mb-4">
          Welcome to Tempo!
        </h1>
        
        <p className="text-gray-300 text-base leading-relaxed max-w-sm mx-auto">
          You've successfully completed the onboarding process. 
          Your account is ready to go!
        </p>
      </motion.div>

      {/* Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center"
      >
        <div className="text-tempo-orange font-semibold text-lg">
          Onboarding Complete ✓
        </div>
        <div className="text-gray-400 text-sm mt-2">
          Ready to discover events around you
        </div>
      </motion.div>
    </motion.div>
  );
}