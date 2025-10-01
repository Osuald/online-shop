// components/RevealOnScroll.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1, // stagger based on custom value
    },
  }),
};

export default function RevealOnScroll({ children, custom = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      custom={custom}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={revealVariants}
      className="transition-all"
    >
      {children}
    </motion.div>
  );
}
