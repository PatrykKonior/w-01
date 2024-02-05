import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  series: [
    {
      name: "Bilans energii",
      kWh: ["0tys.", "50tys.", "100tys.", "150tys."],
    },
  ],
};

export default function Chart1() {
  return (
    <div className="text-2xl">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
