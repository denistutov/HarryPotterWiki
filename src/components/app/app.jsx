import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../header';
import Main from '../main';
import Characters from '../characters'
import Footer from '../footer';

import HPService from '../../services/hp-service';

import charactersBackground from '../_assets/characters-bg.jpg';
import mainBackground from '../_assets/main-bg.jpg';

import './app.scss';

function App() {
    
    const dataHP = new HPService();
    const [bgImage, setBgImage] = React.useState(mainBackground);

    const updateBackground = (image) => {
        switch (image) {
            case null:
                setBgImage(mainBackground);
                break;
            case 'Characters':
                setBgImage(charactersBackground);
                break;
            default:
                setBgImage(mainBackground);
        }
    };

    return (
        <div className="container" style={{ backgroundImage: `url(${bgImage})`}}>
            <BrowserRouter>  
                <Header 
                    items={['Characters', 'Faculties', 'Spells', 'Books']} setBackground={updateBackground}/>
                <main className="page-main">
                    <Switch>
                        <Route exact 
                            path='/'
                            render={() => <Main />} />
                        <Route exact 
                            path='/characters' 
                            render={() => <Characters data={dataHP.getAllCharacters} />} />
                    </Switch>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App; 