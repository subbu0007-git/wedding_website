import { useRef, useEffect } from "react";
import { motion, useScroll, useAnimation, useInView, transform } from "framer-motion";

const Componentfadeanimation = ({ children, initial, animate, other }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({ ...animate });
    }
  }, [controls, isInView]);
  return (

    <motion.div style={{ width: "100%", height: "100%" }} ref={ref} initial={initial} animate={controls} transition={other}  >
      {children}
    </motion.div>

  )
}

export default Componentfadeanimation