import { strings } from '../components';

const initialState = {
    language: 'vi'
};

const LangReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            window.location.reload();
            localStorage.setItem('language', action.language);
            strings.setLanguage(action.language);
            return [...state];
        default:
            return state;
    }

};

export default LangReducers;