import { motion } from "framer-motion";
import { useScreenNavigation } from "@/hooks/use-screen-navigation";

export default function FinalWelcomeScreen() {
  const { navigateToScreen } = useScreenNavigation();

  // Mock event data matching the design
  const mockEvents = [
    {
      id: 1,
      title: "Block Party",
      image: "🎪",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Lagosfest",
      image: "🎵",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      title: "Coachella",
      image: "🌴",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 4,
      title: "Red Cup Throwdown",
      image: "🏆",
      gradient: "from-red-500 to-pink-500"
    },
    {
      id: 5,
      title: "ALT+PARTY",
      image: "🎮",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      id: 6,
      title: "Flex Fridays",
      image: "💪",
      gradient: "from-green-500 to-blue-500"
    }
  ];

  const handleTakeMeIn = () => {
    navigateToScreen("/main-app");
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
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-responsive-xl font-bold text-white mb-2"
          >
            You're all set,
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-responsive-xl font-bold text-white mb-4"
          >
            Partypooper 🎉
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-sm"
          >
            Let's explore what's happening near you
          </motion.p>
        </div>

        {/* Events Grid */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 pb-4"
          >
            {mockEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9, rotate: Math.random() * 6 - 3 }}
                animate={{ opacity: 1, scale: 1, rotate: Math.random() * 4 - 2 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
              >
                {/* Event Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-90`} />
                
                {/* Event Content */}
                <div className="relative h-full p-3 flex flex-col justify-between">
                  {/* Event Icon */}
                  <div className="flex justify-center">
                    <div className="text-2xl sm:text-3xl">{event.image}</div>
                  </div>
                  
                  {/* Event Title */}
                  <div className="text-center">
                    <h3 className="text-white font-bold text-sm sm:text-base leading-tight">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200" />
              </motion.div>
            ))}
          </motion.div>

          {/* Discovery Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mt-4 mb-6"
          >
            <p className="text-gray-400 text-sm">
              Discover events tailored to your vibe
            </p>
          </motion.div>
        </div>

        {/* Take Me In Button */}
        <div className="mt-auto pt-4 pb-safe">
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="tempo-button w-full btn-responsive rounded-full text-white font-semibold shadow-lg"
            onClick={handleTakeMeIn}
          >
            Take me in
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}