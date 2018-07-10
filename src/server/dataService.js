
import request from './request.js';
import config from './config';


var dataService = {
    login(type, token) {
        let url = 'user/authCustomer'
        let data = {
            type,
            token,  
            merchantKey: config.merchantKey
        }
        return request.post(url, data, )
    },

    getCategory() {
        let url = 'user/profile'
        let data = {
        }
        return request.post(url, data)
    },

    getNews: (skip , limit) => {
    var url = 'news/getNews?page=34&api=getNews';
    var data ={
        skip: skip,
        limit: limit,
    }
    return request.post(url,data);
}
}

export default dataService;