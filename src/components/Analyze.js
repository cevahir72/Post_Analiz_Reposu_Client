import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const mockData  = [
  {id:1, user: "Mevlüt", post:10 , return:3, sale:1, time:"10-03-2023"},
  {id:2, user: "Mevlüt", post:20 , return:6, sale:0, time:"12-03-2023"},
  {id:3, user: "Mevlüt", post:33 , return:7, sale:0, time:"15-03-2023"},
  {id:4, user: "Mevlüt", post:22 , return:5, sale:1, time:"17-03-2023"},
  {id:5, user: "Mevlüt", post:44 , return:9, sale:0, time:"19-03-2023"}
]

const data = mockData.map(item => ({
  time: item.time,
  posts: item.post,
  returns: item.return,
  sales: item.sale
}));


const Analyze = () => {
  return (
    <div
      className="container justify-content-center "
      style={{ minHeight: "87vh" }}
    >
      <div>
        <button
          type="submit"
          className="btn btn-warning"
          onClick={() => console.log("onClick")}
          style={{ background: "#CD9B4F", color: "white" }}
        >
          <i class="fa-solid fa-plus"></i> Add
        </button>
      </div>

      <div className="row mt-4">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <BarChart
              width={800}
              height={400}
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="posts" stackId="a" fill="#8884d8" />
              <Bar dataKey="returns" stackId="a" fill="#82ca9d" />
              <Bar dataKey="sales" stackId="a" fill="#ffc658" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analyze