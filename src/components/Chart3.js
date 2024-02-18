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

export default function Chart3() {
  return (
    <div className="col-span-2 row-span-2 col-start-3 row-start-3">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
