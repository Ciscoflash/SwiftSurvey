import { motion } from "framer-motion";
import { useScreenNavigation } from "@/hooks/use-screen-navigation";
import { MapPin } from "lucide-react";

export default function LocationScreen() {
  const { navigateToScreen } = useScreenNavigation();

  const handleTurnOnLocation = () => {
    // Request geolocation permission
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location granted:", position.coords);
          navigateToScreen("/preferences");
        },
        (error) => {
          console.log("Location denied:", error);
          navigateToScreen("/preferences");
        }
      );
    } else {
      console.log("Geolocation not supported");
      navigateToScreen("/preferences");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="gradient-bg min-h-screen min-h-[100dvh] flex flex-col items-center justify-center mobile-content"
    >
      {/* Skip Button */}
      <div className="absolute top-16 right-8">
        <button 
          className="text-white/70 text-sm hover:text-white transition-colors"
          onClick={() => navigateToScreen("/preferences")}
        >
          Skip
        </button>
      </div>

      {/* Location Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-tempo-orange to-tempo-orange-light rounded-full flex items-center justify-center">
          <MapPin size={32} className="text-white" />
        </div>
      </motion.div>
      
      {/* Welcome Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mb-12"
      >
        <h1 className="text-responsive-xl font-bold text-white mb-6">
          Let's find the vibe
        </h1>
        <h2 className="text-responsive-xl font-bold text-white mb-6">
          around you 📍
        </h2>
        
        <p className="text-gray-300 text-base leading-relaxed max-w-sm mx-auto">
          Enable location to discover events
          you'd actually care about.
        </p>
      </motion.div>

      {/* Progress indicator */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "96px" }}
        transition={{ duration: 1, delay: 0.8 }}
        className="h-1 bg-white/30 rounded-full mx-auto mb-12"
      />
      
      {/* Turn On Location Button */}
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
          onClick={handleTurnOnLocation}
        >
          Turn on Location
        </motion.button>
      </motion.div>
    </motion.div>
  );
}