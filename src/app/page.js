import Dashboard from "@/components/Dashboard";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="border-b-[0.5px] navbar border-[#27262B] h-14">
        <Navbar />
      </div>
      <Hero />
      <Dashboard />
    </>
  );
}
