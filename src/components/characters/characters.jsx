import React from 'react';

import CharactersDetails from '../characters-details';
import HPService from '../../services/hp-service';
import './characters.scss';


const hpData = new HPService();

const Characters = () => {

    const [charactersList, setCharactersList] = React.useState([]);
    const [currentPerson, setCurrentPerson] = React.useState();

    React.useEffect(() => {
        hpData.getAllCharacters()
        .then( list => setCharactersList(list));
    },[]);

    return (
        <section className="characters page-container">
            <ul className="characters__list">
                {charactersList.map( character => {
                    return (
                        <li key={character.name} className="characters__item" 
                            onClick={() => setCurrentPerson(character)}>
                            <img src={character.image}  alt={character.name} />
                            <span>{character.name} </span>
                        </li>
                    );
                })}
            </ul>

            <CharactersDetails details={currentPerson}/>

        </section>
    );
};

export default Characters;