import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useScreenNavigation } from "@/hooks/use-screen-navigation";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type EmailForm = z.infer<typeof emailSchema>;

export default function EmailInputScreen() {
  const { navigateToScreen } = useScreenNavigation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<EmailForm>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: EmailForm) => {
    setIsLoading(true);
    
    try {
      // Simulate email validation/registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Email validated",
        description: "Verification code sent to your email...",
      });
      
      // Navigate to OTP verification
      navigateToScreen("/otp");
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
          className="self-start mb-8 mt-[50px] text-white text-2xl hover:text-gray-300 transition-colors flex items-center"
          onClick={() => navigateToScreen("/signup")}
        >
          <ArrowLeft size={24} />
        </button>
        
        {/* Header */}
        <div className="mb-8 sm:mb-12 mt-[200px]">
          <h1 className="text-responsive-lg font-bold text-white mb-2">Enter your email</h1>
        </div>
        
        {/* Email Form */}
        <div className="flex-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-400 text-lg">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-6 text-white placeholder-gray-500 focus:outline-none focus:border-tempo-orange focus:ring-1 focus:ring-tempo-orange transition-colors"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 text-sm" />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        
        {/* Continue Button */}
        <div className="mt-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="tempo-button w-full btn-responsive rounded-full text-white font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={form.handleSubmit(onSubmit)}
            disabled={isLoading}
          >
            {isLoading ? "Validating..." : "Continue"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
