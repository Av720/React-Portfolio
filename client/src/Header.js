import React from 'react';
import '../src/css/App.css'
import Theme from './theme';

function Header() {
    return (
        <header>
            <div className="logo">My Portfolio</div>
           {Theme}
            <div>
            <nav  className="header">
                <ul className='breadcrumbs'> 
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </ul>
            </nav>
        </div>
        </header>
    );
}

export default Header;
