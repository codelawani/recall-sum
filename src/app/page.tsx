import AnimatedHero from "./components/animated-hero";
import Header from "./components/header";
import Samples from "./components/samples";
import SummaryForm from "./components/summary-form";
export default function Home() {
  return (
    <div>
    <Header/>
    <div className="mt-4 flex flex-col items-center">
      <AnimatedHero/>
      <SummaryForm />
      <Samples />
    </div>
    </div>
  );
}
