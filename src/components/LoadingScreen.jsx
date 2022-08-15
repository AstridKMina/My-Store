import React from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';

const LoadingScreen = () => {
    return (
        <div>
            <div className="overlay">
            <Spinner animation="grow" variant="secondary" />
            </div>
        </div>
    );
};

export default LoadingScreen;