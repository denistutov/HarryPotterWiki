import React from 'react';

const CharactersDetails= ({details}) => {

    const [character, setCharacter] = React.useState(null);
  
    React.useEffect(() => {
        setCharacter(details);  
    }, [details]);
    
    
    const EmptyDetails = () => {
        return (
            <div className="characters__details--empty">
                <h3>Select character!</h3>
            </div>
        ); 
    };

    const characterDetailsItem = (name, value) => {
        if (value) {
            return (
                <li className="character-info__item">
                    <span className="character-info__title">{name}:</span>
                    <span className="character-info__desc">{value}</span>
                </li>
            )
        } 

        return null; 
    };

    const CharacterInfo = ({details}) => {

        const {image, name, birthYear, ancestry, eyeColor,
             hairColor, house, wandCore, patronus } = details;

        return (
            <div className="characters__details character-info">
                <img className="character-info__img" src={image} alt={name}/>
                <div className="character-info__container">
                    <h3 className="page-title character-info__name">{name}</h3>
                    <ul className="character-info__list">
                        {characterDetailsItem('Birth year', birthYear)}
                        {characterDetailsItem('Ancestry', ancestry)}
                        {characterDetailsItem('Eye color', eyeColor)}
                        {characterDetailsItem('Hair colour', hairColor)}
                        {characterDetailsItem('House', house)}
                        {characterDetailsItem('Wand core', wandCore)}
                        {characterDetailsItem('Patronus', patronus)}
                    </ul>
             </div>
         </div>      

        );
    };

    
    return (
        <div>
            {!character && <EmptyDetails />}
            {character && <CharacterInfo details={character}/>}
        </div>
    );
}

export default CharactersDetails;