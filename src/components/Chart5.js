import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "column",
  },
  title: {
    text: "Pareto Chart Example",
  },
  xAxis: {
    categories: [
      "Category A",
      "Category B",
      "Category C",
      "Category D",
      "Category E",
    ],
  },
  yAxis: [
    {
      title: {
        text: "Primary Axis",
      },
    },
    {
      title: {
        text: "Pareto (%)",
      },
      opposite: true,
    },
  ],
  series: [
    {
      name: "Primary",
      type: "column",
      data: [100, 80, 60, 40, 20],
    },
    {
      name: "Pareto",
      type: "spline",
      yAxis: 1,
      data: [50, 70, 85, 95, 100],
    },
  ],
};

export default function Chart5() {
  return (
    <div className="col-span-2 row-span-2 col-start-2 row-start-5 bg-slate-500 rounded-2xl overflow-auto relative p-5 m-1 -inset-y-48  h-fit w-auto right-2">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
