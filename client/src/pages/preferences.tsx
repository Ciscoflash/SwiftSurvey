import { useState } from "react";
import { motion } from "framer-motion";
import { useScreenNavigation } from "@/hooks/use-screen-navigation";

const preferenceCategories = [
  { id: "live-music", label: "Live Music", icon: "🎵" },
  { id: "clubs-parties", label: "Clubs & Parties", icon: "🎉" },
  { id: "workshops-talks", label: "Workshops & Talks", icon: "💡" },
  { id: "food-festivals", label: "Food Festivals", icon: "🍕" },
  { id: "cultural-events", label: "Cultural Events", icon: "🎭" },
  { id: "health-fitness", label: "Health & Fitness", icon: "💪" },
  { id: "mindfulness-self-care", label: "Mindfulness & Self-Care", icon: "🧘" },
  { id: "lifestyle", label: "Lifestyle", icon: "✨" },
  { id: "networking-meetups", label: "Networking & Meetups", icon: "🤝" },
  { id: "gaming", label: "Gaming", icon: "🎮" },
  { id: "popup-shops", label: "Pop-up Shops & Markets", icon: "🛍️" },
  { id: "creative-experiences", label: "Creative Experiences", icon: "🎨" },
  { id: "others", label: "Others", icon: "🌟" }
];

export default function PreferencesScreen() {
  const { navigateToScreen } = useScreenNavigation();
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);

  const togglePreference = (id: string) => {
    setSelectedPreferences(prev => 
      prev.includes(id) 
        ? prev.filter(p => p !== id)
        : [...prev, id]
    );
  };

  const handleNext = () => {
    navigateToScreen("/location");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="gradient-bg-alt min-h-screen min-h-[100dvh]"
    >
      <div className="mobile-content min-h-[100dvh] flex flex-col">
        {/* Skip Button */}
        <div className="flex justify-end mb-4">
          <button 
            className="text-white/70 text-sm hover:text-white transition-colors"
            onClick={() => navigateToScreen("/location")}
          >
            Skip
          </button>
        </div>

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-responsive-xl font-bold text-white mb-2"
          >
            What's your kind
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-responsive-xl font-bold text-white mb-4"
          >
            vibe? 😎
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-sm"
          >
            Pick what you love so we can recommend events you'll enjoy.
          </motion.p>
        </div>

        {/* Preferences Grid */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 pb-4"
          >
            {preferenceCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  relative p-3 sm:p-4 rounded-xl border-2 transition-all duration-200
                  ${selectedPreferences.includes(category.id)
                    ? 'bg-tempo-orange/20 border-tempo-orange text-white'
                    : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30'
                  }
                `}
                onClick={() => togglePreference(category.id)}
              >
                <div className="text-left">
                  <div className="text-lg sm:text-xl mb-1">{category.icon}</div>
                  <div className="text-xs sm:text-sm font-medium leading-tight">
                    {category.label}
                  </div>
                </div>
                
                {/* Selection indicator */}
                {selectedPreferences.includes(category.id) && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2 w-5 h-5 bg-tempo-orange rounded-full flex items-center justify-center"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path 
                        d="M20 6L9 17L4 12" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Next Button */}
        <div className="mt-auto pt-4 pb-safe">
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="tempo-button w-full btn-responsive rounded-full text-white font-semibold shadow-lg"
            onClick={handleNext}
          >
            Next
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}