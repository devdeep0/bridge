import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffects } from '@/components/comps/mainfade'
export function FlipWordsDemo() {
  const words = ["efficiently", "sustainably"];

  return (
    <div className="h-[40rem] w-full flex justify-center items-center px-4 ">
      <div className="text-2xl mx-auto overflow-hidden font-normal text-neutral-600 dark:text-neutral-400">
        <div className="text-5xl text-white mb-2 font-semibold flex flex-col"> NodeBridge <div>Empowering Africa <span className="italic font-bold text-blue-500">Node by Node</span></div></div>
      NodeBridge is a community dedicated to empowering the African community to 
        <FlipWords words={words} /> 
        <div className="text-base w-3/4">run Ethereum nodes. Through education, innovation, and collaboration, we aim to overcome unique challenges and build a strong foundation for blockchain technology in Africa.</div>
      </div>
    </div>
  );
}
