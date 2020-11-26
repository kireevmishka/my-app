import React from 'react';
import classes from './nav.module.css';

function Nav() {
    return(
        <nav className={classes.nav}>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <a className='nav__link' href='#s'>Profile</a>
                </li>
                <li className='nav__item'>
                    <a className='nav__link' href='#s'>Messages</a>
                </li>
                <li className='nav__item'>
                    <a className='nav__link' href='#s'>News</a>
                </li>
                <li className='nav__item'>
                    <a className='nav__link' href='#s'>Music</a>
                </li>
                <li className='nav__item'>
                    <a className='nav__link' href='#s'>Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;