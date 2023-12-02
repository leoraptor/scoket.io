"use client";

import { useEffect } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const CustomBar = (props) => {
  const { x, y, width, height } = props;
  const radius = 5;

  return (
    <g>
      <path
        d={`M${x},${y + height} 
            L${x},${y + radius} 
            Q${x},${y} ${x + radius},${y} 
            L${x + width - radius},${y} 
            Q${x + width},${y} ${x + width},${y + radius} 
            L${x + width},${y + height} Z`}
        fill={props.fill}
      />
    </g>
  );
};

const Dashboard = () => {
  return (
    <div className="container  py-10 text-white">
      <div className="p-4 border-[0.5px] border-[#27262B] rounded-xl">
        <p className="dashboardtext">Admin Dashboard</p>

        <div className="dashboardGrid">
          <div className="cards rounded-xl">
            <div className="flex items-center justify-between">
              <div className="cardhtext">Total Revenue</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2v20m5-17H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path>
                </svg>
              </div>
            </div>
            <div className="cardbtext">$ 500,00</div>
          </div>
          <div className="cards rounded-xl">
            <div className="flex items-center justify-between">
              <div className="cardhtext">Active Users</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
            </div>
            <div className="cardbtext">+ 500,00</div>
          </div>
          <div className="cards rounded-xl">
            <div className="flex items-center justify-between">
              <div className="cardhtext">Leads Onboarded</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 00-3-3.87m-3-12a4 4 0 010 7.75"></path>
                </svg>
              </div>
            </div>
            <div className="cardbtext">+ 500,00</div>
          </div>

          <div className="cards rounded-xl">
            <div className="flex items-center justify-between">
              <div className="cardhtext">Leads Active</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 00-3-3.87m-3-12a4 4 0 010 7.75"></path>
                </svg>
              </div>
            </div>
            <div className="cardbtext">+ 500,00</div>
          </div>
        </div>
        {/* graph  */}
        <div className="p-4 border-[0.5px] border-[#27262B] rounded-xl mt-5 text-white h-full">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            {/* <Tooltip /> */}
            {/* <Legend /> */}
            <Bar
              barSize={100}
              dataKey="pv"
              fill="#ADFA1D"
              shape={<CustomBar />}
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            {/* <Bar
          dataKey="uv"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        /> */}
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
