import React from 'react';
import { useHistory } from 'react-router-dom';
import { rootPaths } from '../../config/app-factory';
import './header.css';

export const Header = () => {
    let history = useHistory();
    return (
        <>
            <div className="header">
                <div className="header-container">
                    <ul className="header-item-wrapper">
                        <li className="header-item" onClick={() => history.push(rootPaths.tasks)}>
                            Tasks
                        </li>
                        <li className="header-item" onClick={() => history.push(rootPaths.about)}>
                            About
                        </li>
                    </ul>
                    <hr />
                </div>
            </div>
        </>
    );
};
