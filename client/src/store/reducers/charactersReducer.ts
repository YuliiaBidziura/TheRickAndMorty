import { CharactersState, CharactersActionTypes, CharactersAction } from '../../types/Characters';

const initialState: CharactersState = {
    characters: [],
    error: null,
    page: 1,
    loading: false
}

export const charactersReducer = (state = initialState, action: CharactersAction ): CharactersState => {
    switch(action.type) {
        case CharactersActionTypes.FETCH_CHARACTERS:
            return {...state, loading: true};
        case CharactersActionTypes.FETCH_CHARACTERS_SUCCESS:
            return {...state, loading: false, characters: action.payload};
        case CharactersActionTypes.FETCH_CHARACTERS_ERROR:
            return {...state, loading: false, error: action.payload};
        case CharactersActionTypes.SET_CHARACTERS_PAGE:
            return {...state, page: action.payload};
        default: 
            return state;
    };
}