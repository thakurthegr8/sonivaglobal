import React from 'react';

const ScheduleCall = () => {
    return (
        <div
        style={{ backgroundColor: 'rgb(27,38,65)', paddingBottom: '20px' }}>

        <div className="container">
            <div className="row">
                <div className="col-md-6 contact-small-sections">
                    <h1 data-aos="flip-down">Ready To Talk?</h1>
                    <p data-aos="zoom-in">We’re ready to listen. Let’s find a good time.</p>
                </div>
                <div className="col-md-6 contact-small-sections"><button className="btn btn-primary" data-aos="zoom-out" type="button">Schedule A Call</button></div>
            </div>
        </div>
    </div>
    );
};

export default ScheduleCall;