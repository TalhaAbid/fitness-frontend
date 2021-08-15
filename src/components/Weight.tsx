import React, { ReactEventHandler, useState } from "react";
import { CartesianGrid, LineChart, XAxis, Line, Tooltip, YAxis } from 'recharts'

function Weight() {
  const [weight, setWeight] = useState('');
  const [lastWeight, setLastWeight] = useState(140);

  const weightInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // submit to api
  }



  // TODO: MAKE GRAPH A SEPERATE COMPONENT
  const data1 = [
  ]
  for (let i = 0; i < 20; i++) {
    data1.push({
      date: new Date(`August ${10 + i}, 2021 10:00:00 am`).toDateString(),
      weight: 140 + i
    })
  }
  console.log(data1);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl pb-4 border-b-4">Weight Tracker</h1>
      <h3 className="text-3xl py-2">Enter Todays Weight</h3>
      <form onSubmit={handleSubmit}>
        <input type="number" name="weight" value={weight} className="form-input px-4 py-3 rounded" onChange={weightInputHandler} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">submit</button>
      </form>
      <LineChart

        width={window.innerWidth / 2}
        height={window.innerHeight / 2}
        data={data1}
        margin={{
          top: 5,
          right: 20,
          left: 10,
          bottom: 5
        }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="linear" dataKey="weight" stroke="#ff7300" yAxisId={0} />
      </LineChart>
    </div>
  );
}
export { Weight };
