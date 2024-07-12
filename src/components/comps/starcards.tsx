"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../ui/glowing-stars";

export function GlowingStarsBackgroundCardPreview() {
  return (
    <div className="flex py-20 items-center flex-wrap gap-10 justify-center antialiased">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Education and Training:</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
          Offering workshops, seminars, and resources tailored to the African context.
          </GlowingStarsDescription>
          <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            <Icon />
          </div>
        </div>
      </GlowingStarsBackgroundCard>

      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Partnerships:</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
          Collaborating with global and local stakeholders to provide the best support and resources.
          </GlowingStarsDescription>
          <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            <Icon />
          </div>
        </div>
      </GlowingStarsBackgroundCard>

      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Community-Driven Initiatives: </GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
          Encouraging members to propose and develop initiatives that align with our goals.
          </GlowingStarsDescription>
          <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            <Icon />
          </div>
        </div>
      </GlowingStarsBackgroundCard>

      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Technical Support:</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
          Providing access to alternative energy sources like solar power and reliable internet options like Starlink.
          </GlowingStarsDescription>
          <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            <Icon />
          </div>
        </div>
      </GlowingStarsBackgroundCard>

      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Sustainability:</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
          Implementing scalable solutions to ensure long-term success.
          </GlowingStarsDescription>
          <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            <Icon />
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
