import React from 'react'

const Header =(props)=>{
    return (<header className="masthead"
        style={{
            height: '120vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgb(27,38,65)',
            backgroundAttachment: 'fixed'
        }}>
        <div className="overlay"></div>
        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
            <source src="https://dl.dropboxusercontent.com/s/t0zjc2u8bpxonim/brand-header-bg.mp4?dl=0" type="video/mp4" />
        </video>
        <div className="container h-100">
            <div className="d-flex h-100 text-center align-items-center">
                <div className="col-md-12 w-100 text-white">
                    <h1 className="display-3">'Tis Healthy<br />
                 To Be Sick<br />
                 Sometimes.</h1>
                    <p className="lead mb-0">Services On Your Fingertips.</p>
                    <button style={{ color: '#fff' }} className="btn btn-primar your header-btn">Get Into.</button>
                </div>
            </div>
        </div>
    </header>)
}

export default Header