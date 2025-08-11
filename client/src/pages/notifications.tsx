import { useState } from "react";
import { motion } from "framer-motion";
import { useScreenNavigation } from "@/hooks/use-screen-navigation";
import { Bell, Clock, Camera } from "lucide-react";

export default function NotificationsScreen() {
  const { navigateToScreen } = useScreenNavigation();
  const [showPermissionDialog, setShowPermissionDialog] = useState(false);

  const mockNotifications = [
    {
      id: 1,
      icon: "👥",
      text: "Your friend Aisha is going to the kickback. Join her?",
      type: "friend"
    },
    {
      id: 2,
      icon: "🎫",
      text: "Ticket reminder: Afrobeat Nights starts in 2hrs",
      type: "reminder"
    },
    {
      id: 3,
      icon: "📸",
      text: "Capture the vibe before the show ends",
      type: "capture"
    }
  ];

  const handleEnableNotifications = () => {
    setShowPermissionDialog(true);
  };

  const handleAllowNotifications = () => {
    // Request notification permission
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        console.log('Notification permission:', permission);
        setShowPermissionDialog(false);
        navigateToScreen("/final-welcome");
      });
    } else {
      setShowPermissionDialog(false);
      navigateToScreen("/final-welcome");
    }
  };

  const handleDontAllow = () => {
    setShowPermissionDialog(false);
    navigateToScreen("/final-welcome");
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
            onClick={() => navigateToScreen("/final-welcome")}
          >
            Skip
          </button>
        </div>

        {/* Header */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-responsive-xl font-bold text-white mb-4"
          >
            Stay in the loop 🔔
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-sm leading-relaxed"
          >
            Get notified when new events drop, when galleries unlock, and when your photo gets updated.
          </motion.p>
        </div>

        {/* Notification Examples */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-4 mb-8"
          >
            {mockNotifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-start space-x-3 p-4 bg-white/5 border border-white/10 rounded-xl"
              >
                <div className="w-8 h-8 bg-tempo-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm">{notification.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm leading-relaxed">
                    {notification.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enable Notifications Button */}
        <div className="mt-auto pt-4 pb-safe">
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="tempo-button w-full btn-responsive rounded-full text-white font-semibold shadow-lg"
            onClick={handleEnableNotifications}
          >
            Enable Notifications
          </motion.button>
        </div>

        {/* Permission Dialog */}
        {showPermissionDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-800 rounded-2xl p-6 max-w-sm w-full"
            >
              <div className="text-center mb-6">
                <div className="text-white font-semibold mb-4">
                  "Tempo" would you like to send you notifications?
                </div>
                <div className="text-gray-400 text-sm leading-relaxed">
                  Notifications may include alerts, sounds, and icon badges. These can be configured in settings.
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  className="flex-1 py-3 bg-gray-600 rounded-xl text-white font-medium"
                  onClick={handleDontAllow}
                >
                  Don't Allow
                </button>
                <button
                  className="flex-1 py-3 bg-tempo-orange rounded-xl text-white font-medium"
                  onClick={handleAllowNotifications}
                >
                  Allow
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}