import React from 'react';
import { getFirstToUpper } from '../../utils/carObj.utils';
import './Nav.css';
function Nav(props) {
  const insertDepartments = () => {
    return (
      <ul className='nav__ul'>
        {props.departments.map((d) => (
          <li className='nav__li' key={d}>
            {getFirstToUpper(d)}
          </li>
        ))}
      </ul>
    );
  };
  return <nav className='nav'>{insertDepartments()}</nav>;
}

export default Nav;
