import React from 'react';
import { rootComponents } from './config/app-factory';
// import { Tasks } from './tasks';

export const App = () => {
    return (
        <>
            {rootComponents.map((Component, index) => {
                return <Component key={index} />;
            })}
        </>
    );
};
