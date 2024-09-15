import React from "react";
import Chart from "react-apexcharts";
const Line = () => {
    const options = {
        chart: {
          id: "basic line",
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
          labels: {
            show: false
          }
        },
        yaxis:{
            labels: {
                show: false
              },
            axisTicks: {
                show: false
            }
        }
      };

      const series = [
        {
          name: "series-1",
          data: [80, 85, 85, 85, 75, 60, 40, 39, 30, 24, 20, 35],
          
        },
      ];
      return(
        
        <Chart options={options} series={series} type="line" width="250" />
      )
}
export default Line;