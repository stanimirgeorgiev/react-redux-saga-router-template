import React from 'react';

import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import BarChart from 'recharts/lib/chart/BarChart';
import Bar from 'recharts/lib/cartesian/Bar';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import { getTodosData, getUserData } from '../utils/mocked-data';

const users = getUserData().map((user) => {
  return {id: user.id, name: user.name};
})

function SimpleBarChart(props) {
  let getCompletedData = users.map((user) => {
    return {
      Name: user.name,
      Completed: getTodosData().filter((todo) => {
        return todo.userId === user.id && todo.completed;
      }).length,
      Failed: getTodosData().filter((todo) => {
        return todo.userId === user.id && !todo.completed;
      }).length,
      id: user.id
    };
  });

  const { selectedUserId } = props;
  if (selectedUserId) {
    getCompletedData = [getCompletedData[selectedUserId - 1]];
  }

  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={420}>
      <BarChart data={getCompletedData}>
        <XAxis name="Users" height={150} textAnchor={'end'} angle={-30} dataKey="Name" reversed allowDataOverflow/>
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Completed" fill="#82ca9d" barSize={30}/>
        <Bar dataKey="Failed" fill="#8884d8" barSize={30}/>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default SimpleBarChart;
