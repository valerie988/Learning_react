
import Line from "./linechart";
import Bar from "./barchat";
const Dashboard = () => {
  

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
            </div>
            <h1>$613.200</h1>
            <Line />
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
          <Bar />
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
