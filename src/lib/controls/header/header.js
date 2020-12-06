import React from 'react';
import { useHistory } from 'react-router-dom';

import { rootPaths } from '../../../config/app-factory';
import './header.css';

export const Header = () => {
  const history = useHistory();

  return (
    <>
      <div className="header">
        <div className="header__container">
          <ul className="header__item__wrapper">
            <li
              className="header__item"
              onClick={() => history.push(rootPaths.tasks)}
              onKeyPress={() => {}}
              role="presentation"
            >
              Tasks
            </li>
            <li
              className="header__item"
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
