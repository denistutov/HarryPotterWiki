import React from 'react';

import footerLogo from '../_assets/footer-logo.png';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="page-footer__container page-container">
                <div className="copywrite">© DT 2020</div>
                <div className="line-decorate line-decorate--horiz page-footer__line"></div>
                <img className="footer-logo" src={footerLogo} alt="Hogwarts logo"/>
            </div>
        </footer>
    );
};

export default Footer;