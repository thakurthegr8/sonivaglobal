import React from 'react';

const PressRelease = () => {
    return (
        <div>
        <div className="container">
            <div className="row blogs-row">
                <div className="col-md-3 col-xl-3 blogs-caption-container">
                    <h1 data-aos="zoom-in">Blog &amp;&nbsp;<br />Press&nbsp;<br />Releases</h1><button className="btn btn-primary" data-aos="zoom-in" type="button">Explore more</button><img className="img-fluid" data-aos="zoom-in"
                        src={require("../../assets/img/activity.gif")}
                        style={{ filter: 'blur(0px) brightness(101%) hue-rotate(97deg)' }} /></div>
                <div
                    className="col-md-3 blogs-small-sections" data-aos="zoom-in"><span>May 13, 2020</span>
                    <h1>Soniva's Employees<br />the Heroes of...</h1>
                    <p>Soniva Global recognizes the contribution of its employees as it successfully navigates the COVID-19 pandemic “I have always known that…</p><a href="#">Read More&nbsp;<i className="fa fa-plus"></i></a></div>
                <div className="col-md-3 blogs-small-sections"
                    data-aos="zoom-in"><span>May 13, 2020</span>
                    <h1>Soniva's Employees<br />the Heroes of...</h1>
                    <p>Soniva Global recognizes the contribution of its employees as it successfully navigates the COVID-19 pandemic “I have always known that…</p><a href="#">Read More&nbsp;<i className="fa fa-plus"></i></a></div>
                <div className="col" data-aos="zoom-in"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                ><img src={require("../../assets/img/blog-flower-pot.png")} /></div>
            </div>
        </div>
    </div>
    );
};

export default PressRelease;