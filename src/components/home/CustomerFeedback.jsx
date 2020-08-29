import React from 'react'

const CustomerFeedBack=(props)=>{
    return(  <div
        style={{
            backgroundImage: `url(${require('../../assets/img/customer-feedback-bg.png')})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
        }}>
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-xl-12 customer-feedback-caption-container" data-aos="flip-down">
                    <h1><strong>What Our Customers Say</strong></h1>
                </div>
                <div className="col-md-4 col-xl-12 carousel-holder">
                    <div className="carousel slide" data-ride="carousel" data-aos="flip-right" data-aos-duration="550" id="carousel-1">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span className="carousel-control-prev-icon"></span><span className="sr-only">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button"
                            data-slide="next"><span className="carousel-control-next-icon"></span><span className="sr-only">Next</span></a></div>
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-1" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-1" data-slide-to="1"></li>
                            <li data-target="#carousel-1" data-slide-to="2"></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default CustomerFeedBack