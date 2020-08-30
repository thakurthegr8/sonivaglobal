import React from 'react';

const DarkFooter = () => {
    return (
        <div className="footer-dark">
        <footer style={{ backgroundColor: 'rgb(27,38,65)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Solutions</a></li>
                            <li><a href="#">Our Products</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Terms Of us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Recent Tweets</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Address</h3><p style={{ color: '#fff', fontFamily: 'circular std book' }}><i className="icon ion-android-pin"></i>Address Line 1,<br />Address Line 2</p>
                        <p style={{ color: '#fff', fontFamily: 'circular std book' }}><i className="icon ion-android-mail"></i>&nbsp; info@sonivaglobal.com<br /></p>
                        <p style={{ color: '#fff', fontFamily: 'circular std book' }}><i className="fas fa-phone"></i>&nbsp;(+91) 8699113377<br /></p>
                        <p style={{ color: '#fff', fontFamily: 'circular std book' }}><i className="fas fa-phone"></i>&nbsp;(+91) 8699113377<br /></p>
                    </div>
                    <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="fab fa-snapchat-ghost"></i></a><a href="#"><i className="fab fa-instagram"></i></a></div>
                </div>
                <p className="copyright">SONIVA GLOBAL. © 2020</p>
            </div>
        </footer>
    </div>
    );
};

export default DarkFooter;