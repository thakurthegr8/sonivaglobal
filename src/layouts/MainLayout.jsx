import React, { Component } from 'react';
import '../assets/css/default.css'
import '../assets/css/darkfooter.css'
import '../assets/css/lightboxgallery.css'
import '../assets/css/navigationclean.css'
import '../assets/css/teamgrid.css'
import AOS from "aos";
import "aos/dist/aos.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
  } from "react-router-dom";
import DarkFooter from '../components/footers/DarkFooter.jsx'
import NavBar from '../components/headers/Navbar.jsx'
import Home from '../sections/Home'
import Careers from '../sections/Careers'
import About  from '../sections/About'
import OurSolutions from '../sections/OurSolutions'
import ContactUs from '../sections/ContactUs'
import {createBrowserHistory} from 'history'
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})



class MainLayout extends Component {

    constructor(props){
       super(props)
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
                          
                <Router history={createBrowserHistory()}>
                <ScrollToTop>
                    <div>
                    <NavBar />
                    <Switch>
                    <Route exact path='/'  render={(props) => <Home {...props} />}/>
                    <Route exact path='/careers'  render={(props) => <Careers {...props} />}/>
                    <Route exact path='/aboutus' render={(props)=><About {...props}/>}/>
                    <Route exact path='/solutions' render={(props)=><OurSolutions {...props}/>}/>
                    <Route exact path='/contactus' render={(props)=><ContactUs {...props}/>}/>                  
                    </Switch>
                    <DarkFooter />
                    </div>    
                    </ScrollToTop>          
                </Router>
               
            </div>
        );
    }
}

export default MainLayout;