import React, { useState } from "react";
import {FaBars, FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {HiX} from 'react-icons/hi';
import './styles.scss';
import myImage from '../../imageses/myimage.jpg';
const data = [
    {
        label: 'HOME',
        to: '/'

    },
    {
        label: 'ABOUT ME',
        to: '/about'

    },
    {
        label: 'CONTACT',
        to: '/contact'

    },
    {
        label: 'RESUME',
        to: '/resume'

    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'

    },
    {
        label: 'SKILLS',
        to: '/skills'

    }
]

const Navbar = () => {
    const[toggalicon,settoggalicon]=useState(false);
    const handletoggalicon=()=>{
        settoggalicon(!toggalicon);

    }
    return (<div>
        <nav className="navbar">
            <div className="navbar_container">
                <Link to={'/'} className="navbar_container_logo">
                <img height={80} width={80} src={myImage}></img>
                    {/* <FaReact size={30}></FaReact> */}
                </Link>

            </div>
            <ul className={`navbar_container_menu ${toggalicon?'active':''}`}>
                {
                    data.map((item, key) => {
                        return(
                        <li key={key} className="navbar_container_menu_item">
                            <Link className="navbar_container_menu_item_links" to={item.to}>{item.label}</Link>
                        </li>
                        )
                    })
                }
            </ul>
            <div className="nav-icon" onClick={handletoggalicon}>
                {
                    toggalicon?<HiX size={30}></HiX>:<FaBars size={30}></FaBars>
                }
            </div>
        </nav>
    </div>);
}
export default Navbar;