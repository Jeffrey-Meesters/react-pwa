import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='PageTwo'>page two</Link></li>
                </ul>
            </nav>
      </header>
    )
}

export default Main;