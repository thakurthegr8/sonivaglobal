import React from 'react'

const TeamGrid =(props)=>{
    return ( <div className="team-grid"
    style={{
        background: `url(${require('../../assets/img/case-studies-bg.png')})`,
        backgroundSize: 'contain',
        backgroundAttachment: 'fixed'
    }}>
    <div className="container">
        <div className="intro"></div>
        <div className="row people case-studies-row">
            <div className="col-xl-12 case-studies-caption-container" data-aos="flip-down">
                <h1>Case Studies</h1>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-4 item" data-aos="flip-down" data-aos-duration="1150">
                <div className="box"
                    style={{
                        backgroundImage: `url(${require('../../assets/img/case-studies-cd-1.png')})`,
                        backgroundSize: 'inherit'
                    }}>

                    <div className="cover">
                        <h3 className="name"><strong>How Soniva Global&nbsp;Recovered Hospital's&nbsp;Drastics Fall in&nbsp;Revenue&nbsp;</strong></h3>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-4 item" data-aos="flip-down" data-aos-duration="950">
                <div className="box"
                    style={{
                        backgroundImage: `url(${require('../../assets/img/case-studies-cd-2.png')})`,
                        backgroundSize: 'inherit'
                    }}>
                    <div className="cover">
                        <h3 className="name"><strong>Our RCM Team&nbsp;</strong><br /><strong>Transforms&nbsp;</strong><br /><strong>Predicament To&nbsp;</strong><br /><strong>Payment For A&nbsp;</strong><br /><strong>Cardiology Client</strong>ily&nbsp;</h3>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-4 item" data-aos="flip-down" data-aos-duration="850">
                <div className="box"
                    style={{
                        backgroundImage: `url(${require('../../assets/img/case-studies-cd-3.png')})`,
                        backgroundSize: 'inherit'
                    }}><div className="cover"
                        style={{
                            background: 'rgb(27,38,65)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <h3 className="name">SEE MORE</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>)
}
export default TeamGrid