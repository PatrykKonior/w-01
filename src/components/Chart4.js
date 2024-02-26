import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import SolidGauge from "highcharts/modules/solid-gauge";

// Initialize the additional Highcharts modules
HighchartsMore(Highcharts);
SolidGauge(Highcharts);

const options = {
  chart: {
    type: "gauge",
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false,
  },

  title: {
    text: "Speedometer",
  },

  pane: {
    startAngle: -150,
    endAngle: 150,
    background: [
      {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "#FFF"],
            [1, "#333"],
          ],
        },
        borderWidth: 0,
        outerRadius: "109%",
      },
      {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "#333"],
            [1, "#FFF"],
          ],
        },
        borderWidth: 1,
        outerRadius: "107%",
      },
      {
        // default background
      },
      {
        backgroundColor: "#DDD",
        borderWidth: 0,
        outerRadius: "105%",
        innerRadius: "103%",
      },
    ],
  },

  // the value axis
  yAxis: {
    min: 0,
    max: 200,

    minorTickInterval: "auto",
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: "inside",
    minorTickColor: "#666",

    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: "inside",
    tickLength: 10,
    tickColor: "#666",
    labels: {
      step: 2,
      rotation: "auto",
    },
    title: {
      text: "km/h",
    },
    plotBands: [
      {
        from: 0,
        to: 120,
        color: "#55BF3B", // green
      },
      {
        from: 120,
        to: 160,
        color: "#DDDF0D", // yellow
      },
      {
        from: 160,
        to: 200,
        color: "#DF5353", // red
      },
    ],
  },

  series: [
    {
      name: "Speed",
      data: [80],
      tooltip: {
        valueSuffix: " km/h",
      },
    },
  ],
};

export default function Chart4() {
  return (
    <div className="row-span-2 col-start-5 row-start-3 bg-slate-500 rounded-2xl overflow-auto relative p-5 m-1 -inset-y-48  h-auto w-96 right-4 ">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
