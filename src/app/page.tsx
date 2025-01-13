import AnimatedHero from "./components/animated-hero";
import Header from "./components/header";
import Input from "./components/input";
import Samples from "./components/samples";

export default function Home() {
  return (
    <div>
    <Header/>
    <div className="mt-4 flex flex-col items-center">
      <AnimatedHero/>
      <Input />
      <Samples />
    </div>
    </div>
  );
}
