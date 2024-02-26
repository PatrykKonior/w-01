import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "areaspline",
  },
  plotOptions: {
    areaspline: {
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, "rgb(116,140,127)"], // Start color
          [1, "rgba(233,245,234,1)"], // End color
        ],
      },
    },
  },
  title: {
    text: "Ew/Ez [%]",
    align: "left",
  },
  xAxis: {
    categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  },
  yAxis: {
    title: {
      text: "", // Hide the text "Values" on the yAxis
    },
    labels: {
      enabled: false, // Hide the labels on the yAxis
    },
    plotLines: [
      {
        color: "red",
        width: 2,
        value: 100,
        zIndex: 5, // Ensure the plot line is above the series
        label: {
          text: "100 %",
          align: "right",
          style: {
            color: "red",
            fontWeight: "bold",
          },
        },
      },
    ],
  },
  series: [
    {
      name: "Ew/Ez [%]",
      data: [80, 90, 96, 98, 99, 98, 97, 97, 96.7, 102, 98, 85],
      color: "rgb(71,92,80)",
      fillColor: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, "rgb(116,140,127)"], // Start color
          [1, "rgba(233,245,234,1)"], // End color
        ],
      },
    },
  ],
};

export default function Chart1() {
  return (
    <div className="col-start-2 row-start-3 text-2xl bg-slate-500 rounded-2xl overflow-auto relative p-5 m-1 -inset-y-full right-2 h-fit w-96">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
