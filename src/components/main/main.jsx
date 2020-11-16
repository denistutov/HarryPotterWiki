import React from 'react';

import './main.scss';

const Main = () => {
    return (        
        <section className="page-main__container page-container">
            <h1 className="page-title page-main__title">
                Welcome to the 
                Harry Potter Wiki
            </h1>
            <p className="page-text page-main__text">
                On this website you can find information about 
                characters, actors, spells and lot of other 
                interesting things.
            </p>
        </section>
    );
}

export default Main;