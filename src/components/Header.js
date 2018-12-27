import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Main = () => {
    return (
        <header>
            <div className="logo">W<span className="bold-letter">EB</span> cR<span className="bold-letter">DS</span></div>
            <nav>
                <div className="nav-list">
                    <div className="nav-right">
                        <div><Link to='/'><FontAwesomeIcon icon="home" /></Link></div>
                        <div><Link to='Products'>products</Link></div>
                    </div>
                </div>
            </nav>
      </header>
    )
}

export default Main;