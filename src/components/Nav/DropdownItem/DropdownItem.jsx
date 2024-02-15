import React from 'react';
import { Link } from 'react-router-dom';

// react icons
import { FaTheaterMasks } from "react-icons/fa";


// these are your dropdown menu items
const DropdownItem = (props) => {
    return (
        <Link to={props.text}>
            <div className='dropdownItem'>
                {props.icon}
                <h2>{props.title}</h2>
            </div>
        </Link>
    );
}

export default DropdownItem;
