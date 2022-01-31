export interface CharactersState {
    characters: any[],
    error: null | string,
    page: number,
    loading: boolean
};

export enum CharactersActionTypes {
    FETCH_CHARACTERS = 'FETCH_CHARACTERS',
    FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS',
    FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR',
    SET_CHARACTERS_PAGE = 'SET_CHARACTERS_PAGE'
};

interface FetchCharacters {
    type: CharactersActionTypes.FETCH_CHARACTERS;
};

interface FetchCharactersSuccessAction {
    type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS;
    payload: any[];
};

interface FetchCharactersErrorAction {
    type: CharactersActionTypes.FETCH_CHARACTERS_ERROR;
    payload: string;
};

interface FetchCharactersPageAction {
    type: CharactersActionTypes.SET_CHARACTERS_PAGE;
    payload: number;
};

export type CharactersAction = FetchCharacters | FetchCharactersSuccessAction | FetchCharactersErrorAction | FetchCharactersPageAction;