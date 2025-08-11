import { motion } from "framer-motion";

interface TempoLogoProps {
  size?: "sm" | "md" | "lg";
  animate?: boolean;
  className?: string;
}

export default function TempoLogo({ size = "lg", animate = false, className = "" }: TempoLogoProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16", 
    lg: "w-20 h-20"
  };

  const logoSize = sizeClasses[size];
  
  const logoComponent = (
    <div className={`${logoSize} bg-gradient-to-br from-tempo-orange to-tempo-orange-light rounded-full flex items-center justify-center relative ${className}`}>
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        className="w-1/2 h-1/2 text-white"
      >
        <path
          d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5M12 2L14.09 8.26L22 9L14.09 9.74L12 16L9.91 9.74L2 9L9.91 8.26L12 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="currentColor"
        />
      </svg>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {logoComponent}
      </motion.div>
    );
  }

  return logoComponent;
}
