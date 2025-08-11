import { motion } from "framer-motion";
import TempoLogo from "@/components/tempo-logo";
import { useScreenNavigation } from "@/hooks/use-screen-navigation";
import { X } from "lucide-react";

export default function SignupScreen() {
  const { navigateToScreen } = useScreenNavigation();

  const handleSocialLogin = (provider: string) => {
    // TODO: Implement actual social authentication
    console.log(`Sign up with ${provider}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="gradient-bg-alt min-h-screen"
    >
      <div className="relative h-full">
        {/* Modal Background */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Modal Content */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 500 }}
          className="absolute bottom-0 left-0 right-0 bg-tempo-dark-secondary rounded-t-3xl p-8"
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 text-white text-2xl font-light hover:text-gray-300 transition-colors"
            onClick={() => navigateToScreen("/get-started")}
          >
            <X size={24} />
          </button>
          
          {/* Modal Header */}
          <div className="text-center mb-8">
            <TempoLogo size="md" className="mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Get Started</h2>
            <p className="text-gray-400 text-sm">Create a new account</p>
          </div>
          
          {/* Continue with Email Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="tempo-button w-full py-4 px-6 rounded-full text-white font-semibold mb-4 shadow-lg"
            onClick={() => navigateToScreen("/email")}
          >
            Continue with Email
          </motion.button>
          
          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-600"></div>
            <span className="px-4 text-gray-400 text-sm">Or sign up with socials</span>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>
          
          {/* Social Buttons */}
          <div className="flex space-x-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="social-btn flex-1 bg-white/10 border border-white/20 rounded-xl py-3 px-4 flex items-center justify-center backdrop-blur-sm"
              onClick={() => handleSocialLogin("Google")}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="social-btn flex-1 bg-white/10 border border-white/20 rounded-xl py-3 px-4 flex items-center justify-center backdrop-blur-sm"
              onClick={() => handleSocialLogin("Apple")}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
