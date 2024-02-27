import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

// components
import DropdownItem from './DropdownItem/DropdownItem';
import TheSixthLogo from '../../images/t6d.png';


// react icons
import { FaTheaterMasks } from "react-icons/fa";
import { PiFilmSlateLight } from "react-icons/pi";
import { GiFilmProjector } from "react-icons/gi";
import { VscMegaphone } from "react-icons/vsc";
import { IoMdFilm } from "react-icons/io";


function Nav() {

  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();
  // const location = useLocation();

  // variables
  const [menu, setMenu] = useState(false); // menu display toggle
  // const [pageTitle, setPageTitle] = useState('');


  // toggle menu closed when clicking a page or outside
  useEffect(() => {
    let handler = () => {
      setMenu(false);
    };
    document.addEventListener('mousedown', handler);
  }, []);

  // ?? This is the Code to automatically update your page title
  // ?? Based on the pathname of the document
  // // console logs the location pathname of the dom
  // useEffect(() => {
  //   console.log(`location.pathname`, location.pathname);
  //   namePage(location.pathname);
  // }, [location]);

  // // function to define Page Title
  // function namePage(pagePath) {
  //   // console.log('pagePath', pagePath);
  //   // ! may not be supported by some browsers??
  //   let titleArray = pagePath.substr(1, pagePath.length);
  //   // console.log(titleArray);
  //   setPageTitle(titleArray);
  // }

  // logout option resets user to log into the home page
  function userLogoutAndReset() {
    console.log('resetting the home page');
    dispatch({ type: 'LOGOUT' });
    history.push('/home');
  }

  // logo takes user to home page
  function toHomePage() {
    history.push('/home');
  }


  return (
    <div className="nav">

      <div onClick={toHomePage}>
        <img src={TheSixthLogo} className='navLogo' alt='t6d-logo' />
      </div>

    {/* ! This is the extra code for a pageTitle based on pathname */}
      {/* <p>{location.pathname}</p> */}
      {/* <h2 className='navTitle'>{pageTitle}</h2> */}

      {/* dropdown menu */}
      <div className='menuContainer'>
        <div className='menuTrigger' onClick={() => setMenu(!menu)}>
          <IoMdFilm />
        </div>
        <div className={`dropdownMenu ${menu ? 'active' : 'inactive'}`}>
          
          <ul>
            <DropdownItem title={'Action!'} text={"/home"} icon={<FaTheaterMasks />} />
            <DropdownItem title={'Rules'} text={"/about"} icon={<PiFilmSlateLight />} />
            <DropdownItem title={'Scripts'} text={"/scripts"} icon={<GiFilmProjector />} />
            {/* LOG OUT BUTTON */}
            <div
              className='dropdownItem'
              onClick={userLogoutAndReset} 
            >
              <VscMegaphone />
              <span className='menuWord'><h6>Log Out</h6></span>
            </div>
          </ul>

        </div>
      </div>


    </div>
  );
}

export default Nav;
