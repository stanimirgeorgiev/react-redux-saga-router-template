import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../actions/tasks-actions';

export const TasksList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTasks());
    }, []);
    const tasks = useSelector(state => state.tasks.tasksData, shallowEqual);
    return (
        <div
            style={{
                margin: '0 auto',
                top: '50px',
                margin: '10px',
                padding: '10px',
                border: '5px dashed gray',
                borderRadius: '5px',
            }}
        >
            <h3>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <p>Tasks list</p>
                </div>
            </h3>
            <br></br>
            <ul>
                {tasks?.map((task, index) => {
                    return <li key={index}>Title: {task.title}</li>;
                })}
            </ul>
        </div>
    );
};
