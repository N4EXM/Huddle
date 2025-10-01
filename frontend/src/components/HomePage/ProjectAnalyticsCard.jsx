import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  Cell,
  YAxis
} from "recharts";

const data = [
  { day: "S", tasks: 3 },
  { day: "M", tasks: 5 },
  { day: "T", tasks: 7 },
  { day: "W", tasks: 10 },
  { day: "T", tasks: 5 },
  { day: "F", tasks: 7 },
  { day: "S", tasks: 5 },
];

export default function ProjectAnalytics() {
  return (
    <div className="bg-secondBackground relative p-6 rounded-lg shadow-lg text-white w-full col-span-8 row-span-8">
      <h2 className="text-lg font-semibold">Project analytics</h2>
      <p className="text-primary text-sm my-4">Tasks Completed</p>

      {/* FIX: give container a height */}
      <div className="h-4/5 flex items-center absolute top-20 -left-6 justify-center w-full">
        <ResponsiveContainer width="95%" height="80%">
          <BarChart data={data}>
            <XAxis
              dataKey="day"
              // axisLine={true}
              tickLine={false}
              tick={{ fill: "rgba(71,85,105)" }}
            />
            <YAxis
              dataKey={"tasks"}
              tick={{ fill: "rgba(71,85,105)" }}
              tickLine={false}
            />
            <Bar dataKey="tasks" barSize={40} radius={[99, 99, 99, 99]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 3 ? "#0f766e" : "#34d399"} // darker on Wednesday
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
