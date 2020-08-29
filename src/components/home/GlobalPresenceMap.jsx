import React from 'react';

const GlobalPresenceMap = () => {
    return (
        <div>
                    <div className="container">
                        <div className="row" style={{ paddingBottom: '62px' }}>
                            <div className="col-md-12 global-presenge-caption-container">
                                <h1 data-aos="zoom-out-up">Our Global Presence</h1>
                            </div>
                            <div className="col col-md-12 map-container"><img className="img-fluid" data-aos="zoom-in" data-aos-duration="750" data-aos-offset="20px" src={require("../../assets/img/map.png")} /></div>
                        </div>
                    </div>
                </div>
    );
};

export default GlobalPresenceMap;