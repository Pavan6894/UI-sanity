import React from 'react';
import './header.css';
import { FiRefreshCcw } from "react-icons/fi";
import { MdManageAccounts } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { BsHypnotize } from "react-icons/bs";
import { ImNotification } from "react-icons/im";
import Logo from '../image/logo.png';

const Header = () => {
  return (
       <>
        <div className='header__container'>
            <ul className='list'>
                <li className='list__image'>
                    <img src={Logo} alt="logoImage"/>
                </li>
                <li className='region'>
                        <p className='section'><span className='retail'>RETAIL - </span>Atlantic City</p>
                        <div>
                            <p>Order Loc</p>
                            <p>0026301PH</p>
                        </div>
                        <div>
                            <p>USWIN </p>
                            <p>tabmgr</p>
                        </div>
                        <div>
                            <p>Sales</p>
                            <p>ENC01</p>
                        </div>
                </li>
                <li className='center'>
                    <ul className='list__center'>
                        <li className='list__tab'>Home</li>
                        <li className='list__tab'>Account</li>
                        <li className='order__text'>Order</li>
                    </ul>
                </li>
                <li className='list__icon'><FiRefreshCcw className='icon'/><span className='tooltip'>Refresh</span></li>
                <li className='list__icon'><MdManageAccounts className='icon'/><span className='tooltip'>Settings</span></li>
                <li className='list__icon'><FaTools className='icon'/><span className='tooltip'>Tools</span></li>
                <li className='list__icon'><BsHypnotize className='icon'/><span className='tooltip'>Updates</span></li>
                <li className='list__icon'><ImNotification className='icon'/><span className='tooltip'>Info</span></li>
            </ul>
        </div>
       </>
    )
}

export default Header;