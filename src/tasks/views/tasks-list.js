import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../actions/tasks-actions';

import './tasks-list.css';

export const TasksList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTasks());
    }, []);
    const tasks = useSelector(state => state.tasks.tasksData, shallowEqual);
    return (
        <div className="tasks-list">
            <div className="tasks-list__container">
                <h3>
                    <div className="tasks-list__header">
                        <p>Tasks list</p>
                    </div>
                </h3>
                <ul>
                    {tasks?.map((task, index) => {
                        return <li key={index}>Title: {task.title}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};
