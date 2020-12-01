import React from 'react';
import { useHistory } from 'react-router-dom';
import { rootPaths } from '../../config/app-factory';
import './header.css';

export const Header = () => {
  const history = useHistory();

  return (
    <>
      <div className="header">
        <div className="header-container">
          <ul className="header-item-wrapper">
            <li
              className="header-item"
              onClick={() => history.push(rootPaths.tasks)}
              onKeyPress={() => {}}
              role="presentation"
            >
              Tasks
            </li>
            <li
              className="header-item"
              onClick={() => history.push(rootPaths.about)}
              onKeyPress={() => {}}
              role="presentation"
            >
              About
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </>
  );
};
