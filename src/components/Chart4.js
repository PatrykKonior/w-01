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
    height: "80%",
  },

  title: {
    text: "Współczynnik energochłonności",
  },

  pane: {
    startAngle: -90,
    endAngle: 89.9,
    background: null,
    center: ["50%", "75%"],
    size: "120%",
  },

  // the value axis
  yAxis: {
    min: 0,
    max: 1,
    tickPixelInterval: 30,
    tickPosition: "inside",
    tickColor: "#FFFFFF",
    tickWidth: 2,
    tickLength: 20,
    minorTickInterval: null,

    labels: {
      distance: 20,
      step: 2,
      style: {
        fontsize: "14px",
      },
    },
    lineWidth: 0,
    plotBands: [
      {
        from: 0,
        to: 0.5,
        color: "#00563F",
        thickness: 15,
      },
      {
        from: 0.5,
        to: 0.55,
        color: "#EDA323",
        thickness: 15,
      },
      {
        from: 0.55,
        to: 1,
        color: "#DF5353",
        thickness: 15,
      },
    ],
  },

  series: [
    {
      name: "kWh/m3",
      data: [0.372],
      tooltip: {
        valueSuffix: "kWh/m3",
      },
      dataLabels: {
        format: "{y} kWh/m3",
        borderWidth: 0,
        color: "#333333",
      },
      style: {
        fontSize: "16px",
      },
      dial: {
        radius: "80%",
        backgroundColor: "gray",
        baseWidth: 12,
        baseLength: "0%",
        rearLength: "0%",
      },
      pivot: {
        backgroundColor: "gray",
        radius: 6,
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
