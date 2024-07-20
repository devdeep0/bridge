import ShineBorder from "@/components/magicui/shine-border";
import Image from "next/image";
export function ShineBorderDemo() {
  return (
    <ShineBorder
      className="relative flex h-[500px] w-3/4 flex-row items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >

      <div className="h-full w-full gap-5 flex flex-col items-start p-5 justify-center">
        <div className="text-4xl">Become a Member</div>
        <div>Join NodeBridge and start your journey towards becoming a successful Ethereum node operator.</div>
        <div className="bg-green-500 px-5 py-3 rounded-md">Sign Up Now</div>
        </div>
      <div className="h-full w-full flex items-center justify-center">
      <Image
      className="h-4/4 w-3/4"
      src='/Untitled-2.png'
      alt=""
      height={500}
      width={500}
   
      />
      </div>

    </ShineBorder>
  );
}
