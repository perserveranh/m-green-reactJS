var initialState = {
    token: {
        "token": "customer",
        "expiredAt": "2018-04-11T10:15:00.384Z"
    },
    uuid: '',
    user: {
        "activeMember": '',
        "activeCard": '',
        "partner": null,
        "shop": null,
        "name": "",
        "email": "",
        "phone": null,
        "gender": 1,
        "birth": null,
        "address": null,
        "avatar": null,
        "roles": [2],
        "status": true,
        "id": 0,
        "createdAt": "2018-04-09T10:10:11.000Z",
        "updatedAt": "2018-04-09T10:12:27.000Z",
        "province": null,
        "district": null,
        "ward": null,
        "notifications": 0
    },
    memberCards: [
        {
            "cardGroup": {
                "name": "",
                "symbol": "",
                "background": null,
                "id": 0,
            },
            "isShow": true,
            "member": {
                "id": 151,
                "name": "",
                "shortName": "",
                "pointName": '',
                "slogan": "",
                "logo": "http://staging.mpoint.vn/upload/old/20180405/1515639414818logo.png",
                "card": "http://staging.mpoint.vn/upload/old/20180405/1520493633478CGN MEMBERSHIP - BLACK - BLANK (1).png"
            },
            "id": '',
            "code": null,
            "point": 0,
            "totalPoint": 0
        },
    ]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_TOKEN":
            return Object.assign({}, state, { token: action.token, user: { ...state.user, avatar: 'token' } })
        case "SET_USER_INFO":
            return Object.assign({}, state, { user: action.data })
        case "SET_LIST_MEMBER":
            return Object.assign({}, state, { memberCards: action.memberCards })
        default:
            return state;
    }
}

export default userReducer;