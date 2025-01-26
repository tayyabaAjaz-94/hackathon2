import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center bg-[#fafafa] m-4">
      {/* Header Section */}
      <div className="flex flex-col items-center pb-4 text-center">
        <h3 className="text-xl text-black font-bold">Hello Nike App</h3>
        <p className="text-sm text-gray-600 mt-2">
          <span>Download the app to access everything Nike.</span>{" "}
          <Link href={"/"} className="text-blue-500 underline">
            Get Your Great
          </Link>
        </p>
      </div>

      {/* Hero Image Section */}
      <div
        className="w-full h-[50vh] sm:h-[60vh] lg:h-[100vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      ></div>

      {/* Content Section */}
      <div className="flex flex-col items-center p-6 sm:p-10 text-center">
        <p className="text-sm mb-2">First Look</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase">
          Nike Air Max Pulse
        </h2>
        <p className="text-sm leading-6 w-full pt-3 pb-4 sm:pb-6 lg:w-[60%]">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse — designed to push you past your limits and help you go to the
          max.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button className="w-full sm:w-auto">Notify Me</Button>
          <Button className="w-full sm:w-auto">Shop Air Max</Button>
        </div>
      </div>
    </section>
  );
}
