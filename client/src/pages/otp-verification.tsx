import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useScreenNavigation } from "@/hooks/use-screen-navigation";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function OTPVerificationScreen() {
  const { navigateToScreen } = useScreenNavigation();
  const { toast } = useToast();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      toast({
        title: "Invalid code",
        description: "Please enter all 6 digits",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate verification
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsVerified(true);
      toast({
        title: "Code verified",
        description: "Welcome to Tempo!",
      });
      
      // Navigate to welcome screen after short delay
      setTimeout(() => {
        navigateToScreen("/welcome");
      }, 1000);
      
    } catch (error) {
      toast({
        title: "Verification failed",
        description: "Invalid code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = () => {
    toast({
      title: "Code sent",
      description: "A new verification code has been sent to your email.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="gradient-bg-alt min-h-screen min-h-[100dvh]"
    >
      <div className="mobile-content h-full flex flex-col">
        {/* Back Button */}
        <button 
          className="self-start mb-6 sm:mb-8 text-white text-2xl hover:text-gray-300 transition-colors flex items-center"
          onClick={() => navigateToScreen("/email")}
        >
          <ArrowLeft size={24} />
        </button>
        
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-responsive-lg font-bold text-white mb-2">Enter verification code</h1>
          <p className="text-gray-400 text-sm">Enter the code we sent over to Tempo@three.com</p>
        </div>
        
        {/* OTP Input */}
        <div className="flex-1">
          <div className="flex justify-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
            {otp.map((digit, index) => (
              <motion.input
                key={index}
                ref={(el) => inputRefs.current[index] = el}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`w-10 h-10 sm:w-12 sm:h-12 text-center text-lg sm:text-xl font-bold bg-white/10 border-2 rounded-xl text-white focus:outline-none transition-all
                  ${isVerified ? 'border-green-400 bg-green-400/20' : 
                    digit ? 'border-tempo-orange' : 'border-white/20'}
                  focus:border-tempo-orange focus:ring-1 focus:ring-tempo-orange`}
                disabled={isLoading || isVerified}
              />
            ))}
          </div>
          
          {/* Resend Code */}
          <div className="text-center mb-8">
            <span className="text-gray-400 text-sm">Didn't receive the code? </span>
            <button 
              onClick={handleResendCode}
              className="text-tempo-orange font-semibold text-sm hover:text-tempo-orange-light transition-colors"
            >
              Send again
            </button>
          </div>
        </div>
        
        {/* Verify Button */}
        <div className="mt-auto mb-4">
          <motion.button
            whileHover={{ scale: isLoading || isVerified ? 1 : 1.02 }}
            whileTap={{ scale: isLoading || isVerified ? 1 : 0.98 }}
            className={`w-full btn-responsive rounded-full font-semibold shadow-lg transition-all
              ${isVerified ? 'bg-green-500 text-white' : 
                isLoading ? 'tempo-button opacity-50' : 'tempo-button text-white'}`}
            onClick={handleVerify}
            disabled={isLoading || isVerified}
          >
            {isVerified ? "Verified ✓" : isLoading ? "Verifying..." : "Verify"}
          </motion.button>
        </div>
        
        {/* Numeric Keypad */}
        <div className="keyboard-responsive">
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xs mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <motion.button
                key={num}
                whileTap={{ scale: 0.95 }}
                className="aspect-square bg-white/10 rounded-xl text-white text-lg sm:text-xl font-semibold hover:bg-white/20 transition-colors"
                onClick={() => {
                  const emptyIndex = otp.findIndex(digit => digit === "");
                  if (emptyIndex !== -1) {
                    handleOtpChange(emptyIndex, num.toString());
                  }
                }}
              >
                {num}
              </motion.button>
            ))}
            
            <div></div> {/* Empty space */}
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="aspect-square bg-white/10 rounded-xl text-white text-lg sm:text-xl font-semibold hover:bg-white/20 transition-colors"
              onClick={() => {
                const emptyIndex = otp.findIndex(digit => digit === "");
                if (emptyIndex !== -1) {
                  handleOtpChange(emptyIndex, "0");
                }
              }}
            >
              0
            </motion.button>
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="aspect-square bg-white/10 rounded-xl text-white text-lg sm:text-xl font-semibold hover:bg-white/20 transition-colors flex items-center justify-center"
              onClick={() => {
                const lastFilledIndex = otp.findLastIndex(digit => digit !== "");
                if (lastFilledIndex !== -1) {
                  handleOtpChange(lastFilledIndex, "");
                  inputRefs.current[lastFilledIndex]?.focus();
                }
              }}
            >
              ⌫
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}