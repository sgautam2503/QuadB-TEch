import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BsFillMicFill, BsChevronLeft, BsGear } from 'react-icons/bs';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Searchbar from './Searchbar'
import '../styles/index.css'

import { BsSearch } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <div className='Navbar-sec'>
       <a>NAVBAR</a>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
