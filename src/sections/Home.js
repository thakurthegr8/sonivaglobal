import React, {Component} from 'react';
import request from 'request'
import { Link } from 'react-router-dom'
import '../assets/css/default.css'
import '../assets/css/darkfooter.css'
import '../assets/css/lightboxgallery.css'
import '../assets/css/navigationclean.css'
import '../assets/css/teamgrid.css'
import aboutUsLogo from '../assets/img/doctor-img-about-us.png'
import AOS from "aos";
import "aos/dist/aos.css";
import Header from '../components/home/Header.jsx'
import HomeAboutSection from '../components/home/HomeAboutSection.jsx'
import Solutions from '../components/home/Solutions.jsx'
import Products from '../components/home/Products.jsx'
import TeamGrid from '../components/home/TeamGrid.jsx'
import GlobalPresence from '../components/home/GlobalPresence.jsx'
import CustomerFeedBack from '../components/home/CustomerFeedback.jsx'
import PressRelease from '../components/home/PressRelease.jsx'
import ScheduleCall from '../components/home/ScheduleCall.jsx'
import GlobalPresenceMap from '../components/home/GlobalPresenceMap.jsx'


 


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
          // initialise with other settings
          duration : 2000
        });
      }
  
    render() {

        return (
            <div>
                {/* <Navbar /> */}
                <Header />
                <HomeAboutSection aboutUsLogo={aboutUsLogo} />
                <Solutions />
                <Products />
                <TeamGrid />
                <GlobalPresence />
                <CustomerFeedBack />
                <PressRelease />
                <ScheduleCall />
                <GlobalPresenceMap />
                {/* <DarkFooter /> */}
            </div>)
    }
}
