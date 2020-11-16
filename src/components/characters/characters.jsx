import React from 'react';
import './characters.scss';

const charactersList = [
                    'Harry Potter', 'Hermione Granger', 'Ron Weasley',
                    'Draco Malfoy', 'Minerva McGonagall', 'Cedric Diggory',
                    'Cho Chang', 'Severus Snape', 'Rubeus Hagrid', 'Neville Longbottom',
                    'Luna Lovegood'
                ];
const Characters = () => {
    
    return (
        <section className="characters page-container">
            <ul className="characters__list">
                {charactersList.map( charName => {
                    return (
                        <li key={charName} className="characters__item">
                            <img src="http://hp-api.herokuapp.com/images/harry.jpg" alt="Harry Potter"/>
                            <span>{charName}</span>
                        </li>
                    );
                })}

            </ul>
            <div className="characters__details character-info">
                <img className="character-info__img" src="http://hp-api.herokuapp.com/images/harry.jpg" alt="Harry Potter"/>
                <div className="character-info__container">
                    <h3 className="page-title character-info__name">Harry Potter</h3>
                    <ul className="character-info__list">
                        <li className="character-info__item character-info__item--bottom-space">
                            <span className="character-info__title">Birth year:</span>
                            <span className="character-info__desc">1980</span>
                        </li>
                        <li className="character-info__item">
                            <span className="character-info__title">Ancestry:</span>
                            <span className="character-info__desc">half-blood</span>
                        </li>
                        <li className="character-info__item">
                            <span className="character-info__title">Eye color:</span>
                            <span className="character-info__desc">green</span>
                        </li>
                        <li className="character-info__item character-info__item--bottom-space">
                            <span className="character-info__title">Hair colour:</span>
                            <span className="character-info__desc">black</span>
                        </li>
                        <li className="character-info__item">
                            <span className="character-info__title">House:</span>
                            <span className="character-info__desc">gryffindor</span>
                        </li>
                        <li className="character-info__item">
                            <span className="character-info__title">Wand core:</span>
                            <span className="character-info__desc">phoenix</span>
                        </li>
                        <li className="character-info__item">
                            <span className="character-info__title">Patronus:</span>
                            <span className="character-info__desc">stag</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Characters;