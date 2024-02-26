import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import bullet from "highcharts/modules/bullet";
bullet(Highcharts); // Initialize the Bullet module

const options = {
  chart: {
    type: "bullet",
    inverted: true,
    marginLeft: 135,
  },
  title: {
    text: "Product Sales",
  },
  xAxis: {
    categories: ["Revenue"],
  },
  yAxis: {
    plotBands: [
      {
        from: 0,
        to: 200,
        color: "#7cb5ec",
      },
      {
        from: 200,
        to: 300,
        color: "#434348",
      },
      {
        from: 300,
        to: 400,
        color: "#90ed7d",
      },
    ],
    title: null,
  },
  series: [
    {
      data: [
        {
          y: 250,
          target: 320,
        },
      ],
    },
  ],
};

export default function Chart7() {
  return (
    <div className="row-span-2 col-start-5 row-start-5 bg-slate-500 rounded-2xl overflow-auto relative p-5 m-1 -inset-y-48  h-fit w-96 right-4">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
