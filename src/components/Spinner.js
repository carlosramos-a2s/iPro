import React from 'react';

const Spinner = () => {
    return (
        <div className="container-fluid spinner">
            <div className="sr-only">Loading...</div>
            <br/>
            <div className="d-flex justify-content-center">   
                <div className="spinner-border" role="status">
            </div>
            </div>
        </div>
    );
}

export default Spinner;