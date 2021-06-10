import { Navbar, Nav } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About/About'
import Teetimes from './TeeTimes/Teetimes'
import Weather from './Weather/Weather'
import WebFont from 'webfontloader'


const NavBar = () =>{
    WebFont.load({
        google: {
            families: ["Kreon", "Open Sans"],
            },      
    })
    return (
        <div>
            <Navbar variant="dark" expand="lg" style={{backgroundColor: "#009900"}}>
            <Navbar.Brand href="/">
                <div style={{fontFamily: "Kreon", fontSize: '30px'}}>
                <b>WeatherNow</b>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav>
                   <Nav.Link href="/conditions">
                       <div style={{fontFamily: "Kreon", fontSize: '20px', marginLeft: '10px'}}>
                       Playing Conditions
                       </div>
                    </Nav.Link> 
                   <Nav.Link href="/tee_time">
                       <div style={{fontFamily: "Kreon", fontSize: '20px', marginLeft: '10px'}}>
                       Tee Time Resources
                       </div>
                    </Nav.Link>
                   <Nav.Link href="/about">
                       <div style={{fontFamily: "Kreon", fontSize: '20px', marginLeft: '10px'}}>
                       Learn More
                       </div>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/tee_time' component={Teetimes}/>
                    <Route path='/conditions' component={Weather}/>
                </Switch>
            </Router>
        </div>
    )
}
export default NavBar