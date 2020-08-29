import React, { Component } from 'react';
import CareerHeader from '../components/careers/CareerHeader.jsx'
import WorkWithUs from '../components/careers/WorkWithUs.jsx'
class Careers extends Component {
    render() {
        return (
            <div>
               <CareerHeader/>
               <WorkWithUs/>
            </div>
        );
    }
}

export default Careers;