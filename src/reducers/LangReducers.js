import strings from './../components/LocalizedStrings';

const initialState={
    language: 'vi'
};

const LanReducers = (state = initialState,action) => {
    switch (action.type){
        case 'SET_LANGUAGE' :
        localStorage.setItem('language',action.language);
        strings.setLanguage(action.language);
        window.location.reload();
        return [...state];
      

        default:
        return state;
    }

};

export default LanReducers;