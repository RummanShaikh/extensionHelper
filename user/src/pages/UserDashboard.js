import React from "react";
import Base1 from "../components/Base1";
import {Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap'
import { useEffect, useState } from 'react'
import './User.css';
import {Link as ReactLink} from "react-router-dom"
const UserDashboard=()=>{
    const [isOpen, setIsOpen]=useState(false);
    return(
        <Base1>
        <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>

        <div>
        
        
<section className="info">
    <div className="info1" >
        <ReactLink to="/leet" >
            <h1>LeetCode</h1>
            <p>Leetcode is an online platform to enhance your skills and prepare for tech interviews. Their site has over
                1900 coding problems with questions to help you prepare.</p>
        </ReactLink>
    </div>
    <div class="info1">
    <ReactLink to="/code" >
            <h1>CodeChef</h1>
            <p>CodeChef is an online educational and competitive programming platform.</p>
            </ReactLink>
    </div>
</section>

</div>
</Base1>
    )
}

export default UserDashboard