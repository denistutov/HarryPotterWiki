import React from 'react';
import {Link} from 'react-router-dom';

import logoPng from '../_assets/hp-logo.png';
import './header.scss';

const Header = () => {
    return (
        <header className="page-header">
            <div className="page-header__container page-container">
                <div className="page-header__logo main-logo">
                    <Link className="main-logo__link" to="/">
                        <img src={logoPng} alt="Harry Potter logo"/>
                    </Link>
                </div>
                <div className="line-decorate line-decorate--horiz page-header__line--small"></div>
                <div className="page-header__nav-wrapper">
                    <nav className="page-header__nav page-nav">
                        <ul className="page-nav__list">
                            <li className="page-nav__item">
                                <Link className="page-nav__link" to="/characters">Сharacters</Link>
                            </li>
                            <li className="page-nav__item">
                                <Link className="page-nav__link" to="/faculties">Faculties</Link>
                            </li>
                            <li className="page-nav__item">
                                <Link className="page-nav__link" to="/spells">Spells</Link>
                            </li>
                            <li className="page-nav__item">
                                <Link className="page-nav__link" to="books">Books</Link>
                            </li>
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