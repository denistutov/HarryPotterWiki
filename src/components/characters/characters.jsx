import React from 'react';

import CharactersDetails from '../characters-details';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import './characters.scss';

const Characters = ({ data }) => {
    const [charactersList, setCharactersList] = React.useState([]);
    const [currentPerson, setCurrentPerson] = React.useState();
    const [characterActiveItem, setCharacterActiveItem] = React.useState(null);
    const [loadingStatus, setLoadingStatus] = React.useState(true);
    const [errorMessage, setErrorMessage] = React.useState(false);

    React.useEffect(() => {
        data().then( list => {
            setCharactersList(list);
            setLoadingStatus(false);
        })
        .catch((err) => {
            setLoadingStatus(false);
            setErrorMessage(true);
            console.log(err);
        });
    },[data]);

    if (errorMessage) {
        return (
            <ErrorMessage />
        )
    } else {
        return (        
            <section className="characters page-container">
                {!loadingStatus && <React.Fragment>
                    <ul className="characters__list">
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
                    </ul>
                    <CharactersDetails details={currentPerson}/>
                </React.Fragment>}
                        
                {loadingStatus && <Spinner />}
            </section>
        );
    }
};

export default Characters;