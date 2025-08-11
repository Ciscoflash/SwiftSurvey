import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useScreenNavigation } from "@/hooks/use-screen-navigation";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Camera, Eye, EyeOff } from "lucide-react";

const profileSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  username: z.string().min(3, "Username must be at least 3 characters").regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type ProfileForm = z.infer<typeof profileSchema>;

export default function ProfileSetupScreen() {
  const { navigateToScreen } = useScreenNavigation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);

  const form = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ProfileForm) => {
    setIsLoading(true);
    
    try {
      // Simulate account creation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Account created",
        description: "Welcome to Tempo!",
      });
      
      // Navigate to personalized welcome
      navigateToScreen("/welcome-personalized");
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const keyboardLayout = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="gradient-bg-alt min-h-screen min-h-[100dvh]"
    >
      <div className="mobile-content h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-white">
            <div className="text-sm text-gray-400 mb-1">Profile</div>
          </div>
          <button 
            className="text-white/70 text-sm hover:text-white transition-colors"
            onClick={() => navigateToScreen("/welcome-personalized")}
          >
            Skip
          </button>
        </div>

        {/* Profile Picture */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="relative inline-block">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-tempo-orange to-tempo-orange-light rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-xl sm:text-2xl">👤</span>
            </div>
            <button className="absolute bottom-0 right-0 w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Camera size={14} className="sm:size-4 text-gray-600" />
            </button>
          </div>
          <div className="text-white text-sm">Tempo@live.com</div>
        </div>

        {/* Form */}
        <div className="flex-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-400 text-sm">Full name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John doe"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-tempo-orange focus:ring-1 focus:ring-tempo-orange transition-colors"
                        {...field}
                        onFocus={() => setShowKeyboard(false)}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-400 text-sm">Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="partypooper"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-tempo-orange focus:ring-1 focus:ring-tempo-orange transition-colors"
                        {...field}
                        onFocus={() => setShowKeyboard(true)}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-400 text-sm">Create a strong Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-tempo-orange focus:ring-1 focus:ring-tempo-orange transition-colors"
                          {...field}
                          onFocus={() => setShowKeyboard(false)}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-400 text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-400 text-sm">Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-tempo-orange focus:ring-1 focus:ring-tempo-orange transition-colors"
                          {...field}
                          onFocus={() => setShowKeyboard(false)}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-400 text-sm" />
                  </FormItem>
                )}
              />

              <div className="text-xs text-gray-400 mt-2">
                Set a strong password to secure your account
              </div>
            </form>
          </Form>
        </div>

        {/* Virtual Keyboard */}
        {showKeyboard && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="mt-4 bg-white/5 rounded-t-2xl p-3 sm:p-4 keyboard-responsive"
          >
            {keyboardLayout.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-1 mb-2">
                {row.map((key) => (
                  <button
                    key={key}
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded text-white text-xs sm:text-sm hover:bg-white/20 transition-colors"
                    onClick={() => {
                      const currentValue = form.getValues("username");
                      form.setValue("username", currentValue + key);
                    }}
                  >
                    {key}
                  </button>
                ))}
              </div>
            ))}
            <div className="flex justify-center gap-2 mt-2">
              <button
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-tempo-orange rounded text-white text-xs sm:text-sm font-medium"
                onClick={() => setShowKeyboard(false)}
              >
                Done
              </button>
            </div>
          </motion.div>
        )}

        {/* Setup Account Button */}
        <div className="mt-4 sm:mt-6">
          <motion.button
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
            className="tempo-button w-full btn-responsive rounded-full text-white font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={form.handleSubmit(onSubmit)}
            disabled={isLoading}
          >
            {isLoading ? "Setting up..." : "Setup Account"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}