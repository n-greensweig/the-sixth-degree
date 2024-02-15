import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

// components
import DropdownItem from './DropdownItem/DropdownItem';

// react icons
import { FaTheaterMasks } from "react-icons/fa";
import { MdOutlineMovieFilter } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";





function Nav() {

  const user = useSelector((store) => store.user);

  // menu variable
  const [menu, setMenu] = useState(false);


  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">The 6th Degree</h2>
      </Link>

      {/* dropdown menu */}
      <div className='menuContainer'>
        <div className='menuTrigger' onClick={() => setMenu(!menu)}>
          {/* This is your clickable div or picture */}
        </div>
        <div className={`dropdownMenu ${menu ? 'active' : 'inactive'}`}>
          {/* <h3>The Sixth Degree</h3> */}
          <ul>
            {/* <DropdownItem title={'Home'} text={"/user"} />
            <DropdownItem title={'Scripts'} text={""} />
            <DropdownItem title={'Info'} text={"/info"} /> */}

            <Link to={"/user"}>
              <div className='dropdownItem'>
                <FaTheaterMasks />
                <h2>Home</h2>
              </div>
            </Link>

            <Link to={"/info"}>
              <div className='dropdownItem'>
                <MdOutlineMovieFilter />
                <h2>Info</h2>
              </div>
            </Link>

            <Link to={""}>
              <div className='dropdownItem'>
                <RiMovie2Line />
                <h2>Stats</h2>
              </div>
            </Link>

            <Link to={""}>
              <div className='dropdownItem'>
                <BiCameraMovie />
                <h2>Scripts</h2>
              </div>
            </Link>


          </ul>
        </div>
      </div>
      {/* dropdown menu */}




      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            {/* <Link className="navLink" to="/user">
              Home
            </Link> */}

            {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}

            {/* <LogOutButton className="navLink" /> */}
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
