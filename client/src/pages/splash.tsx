import { useEffect } from "react";
import { motion } from "framer-motion";
import TempoLogo from "@/components/tempo-logo";
import { useScreenNavigation } from "@/hooks/use-screen-navigation";

export default function SplashScreen() {
  const { navigateWithDelay } = useScreenNavigation();

  useEffect(() => {
    // Auto-advance through splash -> brand -> get started
    navigateWithDelay("/get-started", 3000);
  }, [navigateWithDelay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="gradient-bg min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <TempoLogo animate />
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "96px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-white/30 rounded-full mx-auto mt-8"
        />
        
        {/* Brand name appears after logo animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-3xl font-bold text-white mt-4"
        >
          tempo
        </motion.h1>
      </div>
    </motion.div>
  );
}
