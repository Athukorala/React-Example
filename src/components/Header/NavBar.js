import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div style={{backgroundColor:"lightgreen"}}>
            <Router>
                <Navbar color="indigo" light expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>Post</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                            <NavItem active>
                                <NavLink to="#">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#">Features</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#">Pricing</NavLink>
                            </NavItem>
                            <NavItem>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle nav caret>Dropdown</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem href="#">Action</DropdownItem>
                                        <DropdownItem href="#">Another Action</DropdownItem>
                                        <DropdownItem href="#">Something else here</DropdownItem>
                                        <DropdownItem href="#">Something else here</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            <NavItem>
                                <form className="form-inline md-form mt-0">
                                    <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
                                </form>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
            </div>
        );
    }
}


 export default NavBar;








// import React,{Component} from 'react';
//
// class NavBar extends Component {
//     render() {
//
//         return (
//             <div>
//                 <nav  className="navbar navbar-expand-lg navbar-light bg-warning" id="navBar">
//                     <a className="navbar-brand">Blog</a>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
//                             aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//
//                     <div className="collapse navbar-collapse" id="navbarColor01">
//                         <ul className="navbar-nav mr-auto">
//                             <li className="nav-item active">
//                                 <a className="nav-link">Home <span className="sr-only">(current)</span></a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link">Features</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link">Pricing</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" >About</a>
//                             </li>
//                         </ul>
//                         <form className="form-inline my-2 my-lg-0">
//                             <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
//                             <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
//                         </form>
//                     </div>
//                 </nav>
//             </div>
//         );
//
//     }
// }
//
//
//
// export default NavBar;