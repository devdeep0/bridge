"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `NodeBridge is more than just a community; it's a movement. Our goal is to provide comprehensive education on Ethereum node operations, address the unique challenges faced in Africa, and create a platform for collaborative innovation.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
