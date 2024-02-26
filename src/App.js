import Header from "./components/Header";
import Dates from "./components/Dates";
import Menu from "./components/Menu";
import Chart1 from "./components/Chart1";
import Chart2 from "./components/Chart2";
import Chart3 from "./components/Chart3";
import Chart4 from "./components/Chart4";
import Chart5 from "./components/Chart5";
import Chart6 from "./components/Chart6";
import Chart7 from "./components/Chart7";
import "./index.css";

function App() {
  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-4">
      <Menu />
      <Header />
      <Dates />
      <Chart1 className="p-5 m-1 -inset-y-80 right-2 h-20" />
      <Chart2 />
      <Chart3 />
      <Chart4 />
      <Chart5 />
      <Chart6 />
      <Chart7 />
    </div>
  );
}

export default App;
