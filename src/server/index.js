
let store = null
let host = null
const api = {

    setStore: (newstore) => {
        store = newstore
    },
    setIDCategory: (idCategory) => {
        store.dispatch({ type: "SET_CATE_ID", idCategory })
    },
    setPromotionType: (promotionType) => {
        store.dispatch({ type: "SET_PROMOTION_TYPE", promotionType })
    },
    setUserToken: (token) => {
        store.dispatch({ type: "SET_USER_TOKEN", token })
    },
    setUserInfo: (user) => {
        store.dispatch({ type: "SET_USER_INFO", data: user })
    },
    setLitMember: (memberCards) => {
        store.dispatch({ type: "SET_LIST_MEMBER", memberCards })
    },
    showMessage: (message, titleMessage) => {
        store.dispatch({ type: "SHOW_MESSAGE", message, titleMessage })
    },
    hideMessage: () => {
        store.dispatch({ type: "HIDE_MESSAGE" })
    },
    showLoading: () => {
        store.dispatch({ type: "SHOW_LOADING" })
    },
    hideLoading: () => {
        store.dispatch({ type: "HIDE_LOADING" })
    },
    showConfirm: (title, body, bodyConfirmOK, bodyConfirmNO, titleBtnOK, titleBtnNO) => {
        store.dispatch({ type: "SHOW_CONFIRMBOX", title, body, bodyConfirmOK, bodyConfirmNO, titleBtnOK, titleBtnNO })
    },
    hideCofirm: () => {
        store.dispatch({ type: "HIDE_CONFIRMBOX" })
    },
    getToken: () => { return (store ? store.getState().userState.token.token : 'customer') },
    getLang() {
        // if (!store.getState()) return 'en'
        // return store.getState().langState.lang
        return localStorage.getItem('lang')
    },
    getHost() {
        return host
    },
    setCate: (category) => {
        store.dispatch({ type: "SET_CATE", category })
    },
    setLang: (lang) => { store.dispatch({ type: "SET_LANG", lang }) },
    genUrl: (img) => {
        return process.env.PUBLIC_URL + img
    }


}
export default api;