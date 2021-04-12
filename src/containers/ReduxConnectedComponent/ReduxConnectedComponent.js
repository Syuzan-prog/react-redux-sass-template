import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Count from 'components/Count/Count';
import { increaseCount, decreaseCount } from 'store/actions/sampleActions2';

import './ReduxConnectedComponent.scss';

const ReduxConnectedComponent = ({
    count,
    increaseCount,
    decreaseCount,
}) => {
    console.log(increaseCount)
    return (
        <div className="app-sample-component">
            <h1 className="app-sample-component__title">Simple Redux test component</h1>
            <Count
                count={count}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
            />
            <Link className="app-sample-component__link" to="/">{'<'} Return Home</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps, { increaseCount, decreaseCount })(ReduxConnectedComponent);
