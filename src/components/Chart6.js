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

export default function Chart6() {
  return (
    <div className="row-span-2 col-start-4 row-start-5">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
