import React from 'react';
import {Link} from 'react-router-dom';

import logoPng from '../_assets/hp-logo.png';
import './header.scss';

const Header = ({ items, setBackground }) => {

    const [activeMenuItem, setActiveMenuItem] = React.useState(null);
    
    const pageMenu = items.map((item, index) => {
        return (
            <li  key={`${item}_${index}`} className="page-nav__item">
                <Link 
                    className={activeMenuItem !== index ? "page-nav__link" : "page-nav__link page-nav__link--active"}
                    to={`/${item}`} 
                    onClick={() => {
                        setActiveMenuItem(index);
                        setBackground(item);
                    }}>
                        {item}
                </Link>
            </li>
        )
    });

    return (
        <header className="page-header">
            <div className="page-header__container page-container">
                <div className="page-header__logo main-logo">
                    <Link className="main-logo__link" to="/" onClick={() => {
                        setActiveMenuItem(null);
                        setBackground(null);
                    }}>
                        <img src={logoPng} alt="Harry Potter logo"/>
                    </Link>
                </div>
                <div className="line-decorate line-decorate--horiz page-header__line--small"></div>
                <div className="page-header__nav-wrapper">
                    <nav className="page-header__nav page-nav">
                        <ul className="page-nav__list">
                            {pageMenu}
                        </ul>
                    </nav>
                    <div className="line-decorate line-decorate--horiz page-header__line"></div>
                    <button className="page-header__ham">Открыть меню</button>
                </div>
            </div>
        </header>
    );
}

export default Header;