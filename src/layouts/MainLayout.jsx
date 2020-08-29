import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
  } from "react-router-dom";
import DarkFooter from '../components/footers/DarkFooter.jsx'
import NavBar from '../components/headers/Navbar.jsx'
import Home from '../sections/Home'
import Careers from '../sections/Careers'
import {createBrowserHistory} from 'history'



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
                    <div>
                    <NavBar />
                    <Switch>
                    <Route exact path='/'  render={(props) => <Home {...props} />}/>
                    <Route exact path='/careers'  render={(props) => <Careers {...props} />}/>                        
                    </Switch>
                    <DarkFooter />
                    </div>              
                </Router>
            </div>
        );
    }
}

export default MainLayout;