"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/utils/cn";
export function CardStackDemo() {
  return (
    <div className=" ">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Workshops and Seminars:",
    designation: "",
    content: (
      <p>
        Hands-on training sessions <Highlight>conducted by experts.</Highlight> 📝
      </p>
    ),
  },
  {
    id: 1,
    name: "Conferences:",
    designation: "",
    content: (
      <p>
        Annual gatherings <Highlight> featuring top speakers </Highlight> from the Ethereum ecosystem.⚡
      </p>
    ),
  },
  {
    id: 2,
    name: "Publications:",
    designation: "",
    content: (
      <p>
        <Highlight> Access to a wealth of articles,</Highlight> blogs, and research papers.📃
      </p>
    ),
  },
];
