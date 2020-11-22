import React from 'react';

import CharactersDetails from '../characters-details';
import HPService from '../../services/hp-service';
import Spinner from '../spinner';
import './characters.scss';


const hpData = new HPService();

const Characters = () => {

    const [charactersList, setCharactersList] = React.useState([]);
    const [currentPerson, setCurrentPerson] = React.useState();
    const [characterActiveItem, setCharacterActiveItem] = React.useState(null);
    const [loadingStatus, setLoadingStatus] = React.useState(true);

    React.useEffect(() => {
        hpData.getAllCharacters()
        .then( list => {
            setCharactersList(list);
            setLoadingStatus(false);
        });
    },[]);

    return (
        <section className="characters page-container">
            {!loadingStatus && <ul className="characters__list">
                {charactersList.map( (character, index) => {
                    return (
                        <li key={`${character.name}_${index}`} 
                            className={characterActiveItem !== index ? 
                                "characters__item" : "characters__item characters__item--active"} 
                            onClick={() => {
                                setCurrentPerson(character);
                                setCharacterActiveItem(index);
                            }}>
                            <img src={character.image}  alt={character.name} />
                            <span>{character.name}</span>
                        </li>
                    );
                })}
            </ul>}

            {loadingStatus && <Spinner />}

            {!loadingStatus && <CharactersDetails details={currentPerson}/>}

        </section>
    );
};

export default Characters;