import axios from "axios";
import { Dispatch } from "redux";
import { CharactersActionTypes, CharactersAction } from "../../types/Characters";

export const fetchCharacters = ( page = 1 ) => {

    return async (dispatch: Dispatch<CharactersAction>) => {
        try {
            dispatch({type: CharactersActionTypes.FETCH_CHARACTERS});
            const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
            setTimeout(() => {
                dispatch({type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS, payload: response.data.results})
            }, 2000);
        } catch (e) {
            dispatch({
                type: CharactersActionTypes.FETCH_CHARACTERS_ERROR,
                payload: 'An error occurred while retrieving data from the server!'
            });
        }
    };
};

export function setCharactersPage(page: number): CharactersAction {

    return {
        type: CharactersActionTypes.SET_CHARACTERS_PAGE, payload: page
    };
};