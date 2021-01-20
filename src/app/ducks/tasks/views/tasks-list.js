import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../actions/tasks-actions';
import { TASKS_ID } from '../constants/common';

import './tasks-list.css';

const TasksListView = ({ tasksData }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, []);

  // const tasksData = useSelector(state => state[TASKS_ID].tasksData, shallowEqual);
  return (
    <div className="tasks-list">
      <div className="tasks-list__container">
        <h3>
          <div className="tasks-list__header">
            <p>Tasks list</p>
          </div>
        </h3>
        <ul>
          {tasksData?.map((task, index) => {
            return <li key={index}>Title: {task.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

TasksListView.propTypes = {
  tasksData: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string })),
};

export const TasksList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const tasksData = useSelector(state => state[TASKS_ID].tasksData, shallowEqual);
  return <TasksListView tasksData={tasksData} />;
};
