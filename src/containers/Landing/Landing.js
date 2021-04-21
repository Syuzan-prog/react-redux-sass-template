import Navigation from 'containers/Navigation/Navigation';
import React from 'react';
import { Link } from 'react-router-dom';

import './Landing.scss';

const Landing = () => {
    return (
        <div className="app-landing">
            {/* <Navigation/> */}
            <h1 className="app-landing__title">React-Redux-Sass Boilerplate Project</h1>
            <Link className="app-landing__link" to="/redux-test">Test Redux {'>'}</Link>
            <span className="app-landing__copyright">&#169; Sokrat Poghosyan, {new Date().getFullYear()}</span>
        </div>
    )
}

export default Landing;
