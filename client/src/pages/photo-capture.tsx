import { useState } from "react";
import { motion } from "framer-motion";
import { useScreenNavigation } from "@/hooks/use-screen-navigation";
import { Camera } from "lucide-react";

export default function PhotoCaptureScreen() {
  const { navigateToScreen } = useScreenNavigation();
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);

  // Mock photo data representing polaroid-style photos
  const mockPhotos = [
    { id: 1, caption: "Getting Ready", style: "rotate-6" },
    { id: 2, caption: "In the Moment", style: "-rotate-3" },
    { id: 3, caption: "Post-Event Recap", style: "rotate-2" }
  ];

  const handleGotIt = () => {
    navigateToScreen("/main-app");
  };

  const handleTakePhoto = () => {
    // In a real app, this would open the camera
    console.log("Opening camera...");
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
            onClick={() => navigateToScreen("/main-app")}
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
            One moment. One
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-responsive-xl font-bold text-white mb-4"
          >
            shot. No retakes. 📸
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-sm"
          >
            Tempo lets you capture a memory; before, during, and after. Make it count.
          </motion.p>
        </div>

        {/* Photo Examples */}
        <div className="flex-1 min-h-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full max-w-xs h-64 sm:h-80"
          >
            {/* Background polaroids */}
            {mockPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: photo.style.includes('-') ? -3 : photo.style.includes('6') ? 6 : 2 
                }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className={`absolute inset-0 bg-white rounded-lg shadow-xl transform ${photo.style}`}
                style={{ 
                  zIndex: mockPhotos.length - index,
                  left: `${index * 8}px`,
                  top: `${index * 12}px`
                }}
              >
                {/* Polaroid photo area */}
                <div className="p-3 h-full">
                  <div className="w-full h-3/4 bg-gradient-to-br from-purple-400 to-pink-400 rounded flex items-center justify-center mb-2">
                    <div className="text-4xl">📷</div>
                  </div>
                  {/* Polaroid caption */}
                  <div className="text-center text-gray-600 text-sm font-handwriting">
                    {photo.caption}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Camera Icon Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute inset-0 flex items-center justify-center z-10"
            >
              <button
                onClick={handleTakePhoto}
                className="w-16 h-16 bg-tempo-orange rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
              >
                <Camera size={24} className="text-white" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Got It Button */}
        <div className="mt-auto pt-4 pb-safe">
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="tempo-button w-full btn-responsive rounded-full text-white font-semibold shadow-lg"
            onClick={handleGotIt}
          >
            Got it
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}