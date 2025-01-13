import Header from "./components/header";
import Input from "./components/input";
import Samples from "./components/samples";

export default function Home() {
  return (
    <div>
    <Header/>
    <div className="mt-4 flex flex-col items-center">
      <h1>Recall Summary</h1>
      <Input />
      <Samples />
    </div>
    </div>
  );
}
