import ShineBorder from "@/components/magicui/shine-border";
import Image from "next/image";
export function ShineBorderDemo() {
  return (
    <ShineBorder
      className="relative flex h-[500px] w-3/4 flex-row items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >

      <div className="h-full w-full gap-4 flex flex-col items-start p-5 justify-center">
        <div className="text-4xl">Become a Member</div>
        <div>Join NodeBridge and start your journey towards becoming a successful Ethereum node operator.</div>
        </div>
      <div className="h-full w-full flex items-center justify-center">
      <Image
      className="h-2/4 w-2/4"
      src='/Untitled-2.png'
      alt=""
      height={1000}
      width={1000}
      />
      </div>

    </ShineBorder>
  );
}
