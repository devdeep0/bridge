"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
      EDUCATIONAL PROGRAM
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      Join our comprehensive training programs designed to teach you everything you need to know about running an Ethereum node.

      </p>
    </WavyBackground>
  );
}
