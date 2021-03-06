import React from 'react'
import {
    NavLink
  } from "react-router-dom";

   import {Navbar,Container,Nav} from 'react-bootstrap'
   import './Navbar.css'

const NavBar =(props)=>{

    return (<nav className="navbar navbar-light navbar-expand-md navigation-clean"
        style={{
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0,
            zIndex: 2000
        }}
    >
        <div className="container">
            <NavLink className="navbar-brand" to='/'
            style={{ color: '#de3860', letterSpacing: '-1px', fontFamily: 'product sans', fontWeight: 'bold' }}
        ><i className="fas fa-plus-square" style={{ color: 'rgb(22,56,96' }} ></i>&nbsp;SONIVAGLOBAL</NavLink>
        <button data-toggle="collapse" className="navbar-toggler"
            data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item" role="presentation">
                        <NavLink className="nav-link" to="/careers"><i className="fas fa-layer-group"></i></NavLink></li>
                    <li className="nav-item" role="presentation"><NavLink className="nav-link" to="/careers"><i className="fa fa-phone"></i></NavLink></li>
                    <li className="nav-item" role="presentation"><NavLink className="nav-link" to="/careers"><i className="icon-login"></i></NavLink></li>
                    <li className="nav-item dropdown"><NavLink className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" to='/'><i className="fa fa-navicon"></i> </NavLink>
                        <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#" style={{ fontWeight: 'bold' }}>Home</a><a className="dropdown-item" role="presentation" href="about.html">About</a><a className="dropdown-item" role="presentation" href="#">Our Solutions</a>
                            <NavLink
                                className="dropdown-item" role="presentation" to='/'>Who We Assist?</NavLink>
                                <NavLink className="dropdown-item" role="presentation" to='/'>How We Do It?</NavLink>
                                <NavLink className="dropdown-item" role="presentation" to='/products'>Our Products</NavLink>
                                <NavLink className="dropdown-item" role="presentation" to='/'>Resources</NavLink>
                            <NavLink
                                className="dropdown-item" role="presentation" to='/contactus'>Contact Us</NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
}

const CustomNavBar=(props)=>{
    return(
        <Container>
            <Navbar
            className="navigation-clean" 
            style={{
                left: 0,
                right: 0,
                top: 0,
                zIndex: 2000
            }} bg="light" variant="light" fixed="top">
                  <Container className="ml-4">
                  <Navbar.Brand>
                        <NavLink className="navbar-brand" to='/'
                            style={{ color: '#de3860', letterSpacing: '-1px', fontFamily: 'product sans', fontWeight: 'bold' }}>
                        <i className="fas fa-plus-square" style={{ color: 'rgb(22,56,96' }} ></i>&nbsp;&nbsp;SONIVAGLOBAL
                        </NavLink>
                    </Navbar.Brand>
                  </Container>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Container>
                  <Navbar.Collapse id="responsive-navbar-nav" style={{width:'100%'}}>
                  <Nav className="justify-content-end" activeKey="/" >
                  <Nav.Item>
                  <NavLink className="nav-link mt-2" to="/solutions" >
                        Our Solutions
                    </NavLink>                                        
                    </Nav.Item>
                    <Nav.Item>
                    <NavLink className="nav-link mt-2" to="/aboutus" >
                        About Us
                    </NavLink>                                        
                    </Nav.Item>
                    <Nav.Item>
                    <NavLink className="nav-link mt-2" to="/contactus" >
                        Contact Us
                    </NavLink>                                        
                    </Nav.Item>
                    <Nav.Item>
                    <NavLink className="nav-link mt-2" to="/careers" >
                        Careers
                    </NavLink>                                        
                    </Nav.Item>
                </Nav>
                  </Navbar.Collapse>
                  </Container>
                                         
            </Navbar>
        </Container>
   )
}

export default CustomNavBar;