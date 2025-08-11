import { motion } from "framer-motion";
import { useScreenNavigation } from "@/hooks/use-screen-navigation";

export default function WelcomePersonalizedScreen() {
  const { navigateToScreen } = useScreenNavigation();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="gradient-bg min-h-screen min-h-[100dvh] relative overflow-hidden"
    >
      {/* Skip Button */}
      <div className="absolute top-16 right-8 z-20">
        <button 
          className="text-white/70 text-sm hover:text-white transition-colors"
          onClick={() => navigateToScreen("/preferences")}
        >
          Skip
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orange ribbon-like decorations */}
        <motion.div
          initial={{ rotate: -45, x: -200, y: -100 }}
          animate={{ rotate: -45, x: -50, y: -50 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 right-0 w-64 h-8 bg-tempo-orange opacity-80 transform"
          style={{ transformOrigin: 'center' }}
        />
        <motion.div
          initial={{ rotate: 45, x: 200, y: 100 }}
          animate={{ rotate: 45, x: 50, y: 50 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-0 left-0 w-64 h-8 bg-tempo-orange opacity-60 transform"
          style={{ transformOrigin: 'center' }}
        />
        
        {/* Scattered text elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute top-32 left-8 text-tempo-orange font-bold text-lg transform rotate-12"
        >
          @partypooper
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-32 right-8 text-tempo-orange font-bold text-lg transform -rotate-12"
        >
          @partypoo
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute top-1/2 left-4 text-tempo-orange font-bold text-sm transform rotate-45"
        >
          Hey John
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen mobile-content">
        {/* Profile Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-tempo-orange to-tempo-orange-light rounded-full flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
          <div className="text-center mt-2">
            <div className="text-white font-semibold">@Partypooper</div>
            <div className="text-gray-400 text-sm">Tempo@live.com</div>
          </div>
        </motion.div>
        
        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h1 className="text-responsive-xl font-bold text-white mb-2">
            Hey John 👋, You're all
          </h1>
          <h2 className="text-responsive-xl font-bold text-white mb-6">
            set!
          </h2>
        </motion.div>

        {/* Progress indicator */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "96px" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-1 bg-white/30 rounded-full mx-auto mb-12"
        />
        
        {/* Continue Button */}
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
            onClick={() => navigateToScreen("/preferences")}
          >
            Continue
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}