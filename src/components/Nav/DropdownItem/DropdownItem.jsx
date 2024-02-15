import React from 'react';
import { Link } from 'react-router-dom';


// these are your dropdown menu items
const DropdownItem = (props) => {
    return (
        <Link to={props.text}>
            <div className='dropdownItem'>
                {props.icon}
                <span className='menuWord'><h6>{props.title}</h6></span>
            </div>
        </Link>
    );
}

export default DropdownItem;
