import Chart from "react-apexcharts";
const Dashboard = () => {
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

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <a href="#">Home</a>
      <section className="part1">
        <div>
          <div className="sale">
            <div>
              <h3>Sale</h3>
              <p>January - July 2023</p>
              <Chart options={options} series={series} type="line" width="550" />
            </div>
            <h1>$613.200</h1>
          </div>
          <div className="cus-order">
            <div className="customer">
              <p>Customer</p>
            </div>
            <div className="order">order</div>
          </div>
        </div>
        <div className="traffic">
          <h3>Traffic</h3>
          <p>January 01, 2023 - December 31, 2023</p>
          <Chart options={options} series={series} type="bar" width="550" />
        </div>
      </section>

      <section className="part2">
        <div className="users">user</div>
        <div className="rating">
          <div className="box">user</div>
          <div className="box">rate</div>
          <div className="box">session</div>
        </div>
      </section>

      <section className="part3">
        <div className="graphs">traffic graphs</div>
      </section>
    </div>
  );
};
export default Dashboard;
