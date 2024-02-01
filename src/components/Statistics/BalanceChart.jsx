import { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  AreaChart,
  Area,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import classes from "./BalanceChart.module.css";

/**
 * This is a component for plotting a balance graph. It does not use any input data yet. This was a test to create different graphs with recharts.
 * To connect the userdata the context, where the data is collected should be changed.
 */

const BalanceChart = () => {
  
  const dataYear = [
    { id: "Jan", revenue: 5000, expenses: 2000, balance: 3000 },
    { id: "Feb", revenue: 4000, expenses: 2500, balance: 1000 },
    { id: "Mär", revenue: 3500, expenses: 4200, balance: 2300 },
    { id: "Apr", revenue: 5000, expenses: 2500, balance: 200 },
    { id: "May", revenue: 4000, expenses: 2000, balance: 500 },
    { id: "Jun", revenue: 4000, expenses: 2500, balance: 900 },
    { id: "Jul", revenue: 2000, expenses: 1700, balance: 900 },
    { id: "Aug", revenue: 2700, expenses: 1700, balance: 3000 },
    { id: "Sep", revenue: 2500, expenses: 250, balance: 3000 },
    { id: "Okt", revenue: 2700, expenses: 2500, balance: 1200 },
    { id: "Nov", revenue: 2700, expenses: 2500, balance: 3000 },
    { id: "Dez", revenue: 0, expenses: 0, balance: 3000 },
  ];
  const [data, setData] = useState(dataYear);

  return (
    <>
      <div className={classes.statisticsNavigation}>
        <select>
          <option>2024</option>
        </select>

      </div>
      <div className={classes.chart}>
        <ResponsiveContainer width={window.innerWidth>"1200px" ? "60%" : "100%"} height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgb(0, 182, 189)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="rgb(0, 182, 189)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgb(255, 80, 103)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="rgb(255, 80, 103)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="4 4"
              strokeOpacity={0.2}
            ></CartesianGrid>
            <XAxis dataKey="id"></XAxis>
            <YAxis></YAxis>
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="rgb(0, 182, 189)"
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="rgb(255, 80, 103)"
              fill="url(#colorExpenses)"
            />
            <Legend></Legend>
            <Tooltip></Tooltip>
          </AreaChart>
        </ResponsiveContainer>
        <ResponsiveContainer width={window.innerWidth>"1200px" ? "40%" : "100%"} height={300}>
          <BarChart data={data}>
          <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgb(136,132,216)" stopOpacity={0.5} />
                <stop offset="95%" stopColor="rgb(66, 186, 255)" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="4 4"
              strokeOpacity={0.2}
            ></CartesianGrid>
            <XAxis dataKey="id"></XAxis>
            <YAxis></YAxis>
            <Bar
              barSize={10}
              dataKey="balance"
              stroke="rgba(136,132,216,0.6)"
              fill="url(#colorBalance)"
            />
            <Legend></Legend>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default BalanceChart;
