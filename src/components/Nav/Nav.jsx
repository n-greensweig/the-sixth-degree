import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

// components
import DropdownItem from './DropdownItem/DropdownItem';

// react icons
import { FaTheaterMasks } from "react-icons/fa";
import { PiFilmSlateLight } from "react-icons/pi";
import { GiFilmProjector } from "react-icons/gi";
import { GiFilmSpool } from "react-icons/gi";
import { VscMegaphone } from "react-icons/vsc";
import { IoMdFilm } from "react-icons/io";




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
          <IoMdFilm />
        </div>
        <div className={`dropdownMenu ${menu ? 'active' : 'inactive'}`}>
          {/* <h3>The Sixth Degree</h3> */}
          <ul>
            {/* <DropdownItem title={'Home'} text={"/user"} />
            <DropdownItem title={'Scripts'} text={""} />
            <DropdownItem title={'Info'} text={"/info"} /> */}

            <Link to={"/user"}>
              <div className='dropdownItem' onClick={() => setMenu(!menu)}>
                <FaTheaterMasks />
                <span className='menuWord'><h6>Home</h6></span>
              </div>
            </Link>

            <Link to={"/info"}>
              <div className='dropdownItem' onClick={() => setMenu(!menu)}>
                <PiFilmSlateLight />
                <span className='menuWord'><h6>Info</h6></span>
              </div>
            </Link>

            <Link to={""}>
              <div className='dropdownItem' onClick={() => setMenu(!menu)}>
                <GiFilmSpool />
                <span className='menuWord'><h6>Stats</h6></span>
              </div>
            </Link>

            <Link to={""}>
              <div className='dropdownItem' onClick={() => setMenu(!menu)}>
                <GiFilmProjector />
                <span className='menuWord'><h6>Scripts</h6></span>
              </div>
            </Link>

            <Link to={""}>
              <div className='dropdownItem' onClick={() => setMenu(!menu)}>
                <VscMegaphone />
                <span className='menuWord'><h6>Log Out</h6></span>
              </div>
            </Link>

          </ul>
        </div>
      </div>


    </div>
  );
}

export default Nav;
