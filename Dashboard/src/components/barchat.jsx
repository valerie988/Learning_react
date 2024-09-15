import React from "react";
import Chart from "react-apexcharts";
const Bar = () => {
    const options = {
        chart: {
          id: "basic bar",
        },
        xaxis: {
          categories: [
            "Jan",
            "Fre",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
      };
      const series = [
        {
          name: "series-1",
          data: [80, 85, 85, 45, 35, 10, 40, 90, 60, 24, 10, 95],
        },
      ];
      return(
        
        <Chart options={options} series={series} type="bar" width="550" />
      )
}
export default Bar;