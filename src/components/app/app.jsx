import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../header';
import Main from '../main';
import Characters from '../characters'
import Footer from '../footer';

import './app.scss';

function App() {
    return (
        <div className="container">
            <Header />
            <main className="page-main">
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/characters' component={Characters} />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App;