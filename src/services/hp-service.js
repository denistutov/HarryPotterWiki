export default class HpService {
    _apiBase = 'http://hp-api.herokuapp.com/api/';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
      }

    getAllCharacters = async () => {
        const res = await this.getResource('characters');
        return res.map(this._transformPerson); 
    }

    _transformPerson(person) {
        return {
          name: person.name,
          birthYear: person.dateOfBirth,
          ancestry: person.ancestry,
          eyeColor: person.eyeColour,
          hairColor: person.hairColour,
          house: person.house,
          wandCore: person.wand.core,
          patronus: person.patronus,
          image: person.image
        }
    }
};