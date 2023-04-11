import React from 'react';

function Header() {
    return (
        <header>
            <div className="logo">My Portfolio</div>
            <nav  className="header">
                <ul className='breadcrumbs'> 
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;
