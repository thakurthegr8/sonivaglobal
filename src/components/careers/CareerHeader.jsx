import React from 'react';

const CareerHeader = () => {
    return (
        <div className="col col-md-12 career-intro">
            <div className="row">
                <div className="col" style={{textAlign:'center'}}>
                    <img className="img-fluid" 
                    src={require("../../assets/img/careers-caption-thumb.png")}
                     style={{marginRight:'18px'}}/>
                    <img className="img-fluid" src={require("../../assets/img/careers-thumb.png")}/>
                    </div>
        </div>
                </div>
    );
};

export default CareerHeader;