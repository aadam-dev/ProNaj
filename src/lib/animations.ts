import { Variants, Transition } from "framer-motion";

// Mechanical easing - precise, industrial feel
export const mechanicalEase = [0.25, 0.1, 0.25, 1] as const;
export const blueprintEase = [0.65, 0, 0.35, 1] as const;

// Base transition presets
export const mechanicalTransition: Transition = {
  duration: 0.2,
  ease: mechanicalEase,
};

export const slowMechanicalTransition: Transition = {
  duration: 0.3,
  ease: "easeOut",
};

export const blueprintTransition: Transition = {
  duration: 0.4,
  ease: blueprintEase,
};

// Slotted slide animation - like machinery moving into place
export const mechanicalSlide: Variants = {
  initial: { x: -20, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: mechanicalTransition,
  },
  exit: {
    x: 20,
    opacity: 0,
    transition: mechanicalTransition,
  },
};

// Vertical slot animation
export const mechanicalSlideUp: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: mechanicalTransition,
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: mechanicalTransition,
  },
};

// Sector expansion for hero columns
export const sectorExpand: Variants = {
  initial: { flex: 1 },
  hover: {
    flex: 3,
    transition: slowMechanicalTransition,
  },
};

export const sectorCompress: Variants = {
  initial: { flex: 1 },
  compressed: {
    flex: 0.5,
    transition: slowMechanicalTransition,
  },
};

// Blueprint reveal - horizontal wipe
export const blueprintReveal: Variants = {
  initial: { clipPath: "inset(0 100% 0 0)" },
  animate: {
    clipPath: "inset(0 0% 0 0)",
    transition: blueprintTransition,
  },
};

// Blueprint reveal vertical
export const blueprintRevealVertical: Variants = {
  initial: { clipPath: "inset(100% 0 0 0)" },
  animate: {
    clipPath: "inset(0% 0 0 0)",
    transition: blueprintTransition,
  },
};

// Fade in with scale - subtle industrial
export const industrialFadeIn: Variants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: mechanicalEase,
    },
  },
};

// Stagger container for grid items
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Card hover effect
export const cardHover: Variants = {
  initial: {
    y: 0,
    boxShadow: "0 0 0 0 rgba(249, 115, 22, 0)",
  },
  hover: {
    y: -4,
    boxShadow: "0 8px 30px -12px rgba(249, 115, 22, 0.25)",
    transition: mechanicalTransition,
  },
};

// Border reveal animation
export const borderReveal: Variants = {
  initial: {
    borderColor: "transparent",
  },
  animate: {
    borderColor: "rgba(249, 115, 22, 1)",
    transition: {
      duration: 0.2,
      ease: mechanicalEase,
    },
  },
};

// Line draw animation for trade routes
export const lineDrawVariants: Variants = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 1.5,
        ease: blueprintEase,
      },
      opacity: {
        duration: 0.2,
      },
    },
  },
};

// Pulse animation for active states
export const pulseVariants: Variants = {
  initial: { scale: 1, opacity: 1 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Navigation link underline
export const navUnderline: Variants = {
  initial: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    transition: mechanicalTransition,
  },
};

// Mobile hub press effect
export const pressEffect: Variants = {
  initial: { scale: 1 },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

// Page transition
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: mechanicalEase,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: mechanicalEase,
    },
  },
};

// Marquee animation helper
export const marqueeVariants: Variants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};
