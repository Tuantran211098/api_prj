import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
const MenuLink = ( { label, to, activeOnlyWhenExact } ) => {
        return (
                <Route to={to} exact={activeOnlyWhenExact} children={({match})=>{
                    var activeColor = match ? 'activeColor' : '';
            return(
                <li className={activeColor}>
                    <Link to={to} className='active'>{label}</Link>
                </li>
            )
        }}

        />
    )
}
class Menu extends Component {
    render( ) {
        return (

            <div class="navbar navbar-default">
                <div className="container">
                <a class="navbar-brand" href="#">Logo</a>
                <ul class="nav navbar-nav">
                <MenuLink label="Home" to="/" activeOnlyWhenExact={true}></MenuLink>
                <MenuLink label="About" to="/About" activeOnlyWhenExact={false}></MenuLink>
                <MenuLink label="Cart" to="/Cart" activeOnlyWhenExact={false}></MenuLink>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown. <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="#"><i class="fa fa-id-badge fa-2x"></i>  &nbsp;&nbsp; Profile</a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li>
                                <Link to='/Cart'><i class="fa fa-cart-plus fa-2x"></i>  &nbsp;&nbsp; Shopping Cart</Link>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li>
                                <a href="#"><i class="fa fa-cogs fa-2x"></i>  &nbsp;&nbsp; Setting</a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li>
                                <a href="#"><i class="fa fa-indent fa-2x"></i>  &nbsp;&nbsp; Log In</a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li>
                                <a href="#"><i class="fa fa-outdent fa-2x"></i> &nbsp;&nbsp; Log Out</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>

        )
    }
}

export default Menu;
