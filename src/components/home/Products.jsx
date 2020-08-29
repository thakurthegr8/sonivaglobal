import React from 'react'

const Products=(props)=>{
    return (<div
        style={{
            background: `url(${require('../../assets/img/our-products-bg.png')})`,
            backgroundSize: 'contain',
            backgroundAttachment: 'fixed'
        }}>
        <div className="container">
            <div className="row our-products-row">
                <div className="col-md-4 col-xl-12 our-products-captions-container" data-aos="flip-down">
                    <h1>Our Products</h1>
                </div>
                <div className="col-md-4 col-xl-12 our-products-para-container" data-aos="flip-down" data-aos-duration="850"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >
                    <p>Our business and technology experts provide the software solutions that address the full scope of revenue cycle management healthcare challenges today</p>
                </div>
                <div className="col-md-4 our-products-small-sections" data-aos="slide-up" data-aos-duration="700"><button className="btn btn-primary" type="button"><i className="fa fa-dollar"></i><strong>Soniva Billing </strong><br /><strong>Solutions </strong><br /><strong>(Practice Management)</strong><br /></button></div>
                <div className="col-md-4 our-products-small-sections" data-aos="slide-up" data-aos-duration="850"><button className="btn btn-primary" type="button"><i className="fa fa-dollar"></i><strong>Workflow </strong><br /><strong>Management </strong></button></div>
                <div className="col-md-4 our-products-small-sections" data-aos="slide-up" data-aos-duration="950"><button className="btn btn-primary" type="button"><i className="fa fa-dollar"></i><strong>StarCred</strong><br /><strong>(Credential Solutions) </strong></button></div>
            </div>
        </div>
    </div>)
}

export default Products