import React, { Component } from 'react';
import Header from '../components/contactus/Header.jsx'
import DetailsSection from '../components/contactus/DetailsSection.jsx'

class ContactUs extends Component {
    render() {
        return (
            <div>
                <Header/>
                <DetailsSection/>
            </div>
        );
    }
}

export default ContactUs;