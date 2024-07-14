"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function CanvasRevealEffectDemo3() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-[40rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative"
    >
        <div className="flex flex-col gap-5">
      <h1 className="md:text-5xl text-5xl font-bold text-center text-white relative z-20 max-w-2xl mx-auto">
      Benefits and Why
      </h1>
      <p className="md:text-2xl text-2xl font-medium text-center text-white relative z-20 max-w-2xl mx-auto">
      Why Run an Ethereum Node in Africa?
      </p>
      <div  data-w-id="dcfd4acf-3de5-cd67-e647-90a5bee17cfb" className="down-circle w-full text-center flex items-center justify-center"  style={{ willChange: 'transform', transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}><div className="html-embed-3 w-embed"><svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9016 17.5931C11.1318 18.9265 9.20728 18.9265 8.43748 17.5931L0.276296 3.45755C-0.493504 2.12422 0.468744 0.457546 2.00834 0.457546L18.3307 0.457548C19.8703 0.457548 20.8326 2.12421 20.0628 3.45755L11.9016 17.5931Z" fill="green"></path>
</svg></div></div>
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>
  );
}
