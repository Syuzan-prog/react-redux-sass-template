import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button/Button';
import SubstractIcon from 'icons/SubstractIcon';
import AddIcon from 'icons/AddIcon';

import './Count.scss';

const Count = ({ count, increaseCount, decreaseCount }) => {
    return (
        <div className="app-count">
            <Button
                onClick={decreaseCount}
                className="app-count__btn"
                primary
            >
                <SubstractIcon />
            </Button>
            <div className="app-count__count">
                <span>
                    {count}
                </span>
            </div>
            <Button
                onClick={increaseCount}
                className="app-count__btn"
                primary
            >
                <AddIcon />
            </Button>
        </div>
    )
}

Count.propTypes = {
    count: PropTypes.number.isRequired,
    increaseCount: PropTypes.func.isRequired,
    decreaseCount: PropTypes.func.isRequired,
}

export default Count;
