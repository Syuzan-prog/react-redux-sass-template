import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Landing = lazy(() => import('containers/Landing/Landing'));
const ReduxConnectedComponent = lazy(() => import('containers/ReduxConnectedComponent/ReduxConnectedComponent'));

const AppRouter = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Route exact path="/" component={Landing} />
                <Route exact path="/redux-test" component={ReduxConnectedComponent} />
            </Suspense>
        </Router>
    )
}

export default AppRouter
