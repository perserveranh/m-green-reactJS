import api from './index'
import config from './config'
const request = {
    get: (url) => {
        return fetch(url)
            .catch(err => { console.log('loi fetch data', err) })
            .then((response) => {
                console.log('response123', response);
                response.json()
            })
    },
    post: (url, data, token) => {
        if ((url + '').indexOf('http') === -1) url = config.HOST + '/' + url
        console.log(url);
        return new Promise(function (resolve, reject) {
            let options = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + (token || localStorage.getItem('RFTK') ? localStorage.getItem('RFTK') : api.getToken()),
                    'Accept-Language': api.getLang()
                },
                body: JSON.stringify(data)
            };
            console.log(`[POST]${url}`, options);
            fetch(url, options).then((response) => {
                console.log(response);
                try {
                    return response.json()
                } catch (err) {
                    reject({ err: 2, msg: 'Phiên làm việc hết hạn' });
                }
            }).then((rs) => {
                if (rs.err === 404) {
                    api.showMessage('Phiên làm việc hết hạn !')
                    return reject({ err: 404, msg: 'Phiên làm việc hết hạn' })
                }
                console.log(`[RESPONSE]`, url, rs);
                resolve(rs);
            }).catch((err) => {
                console.log('loi', err)
            })
        });

    }
}

export default request