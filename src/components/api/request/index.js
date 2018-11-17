import { api, config } from '../../api';
const request = {
    get: (url) => {
        return fetch(url)
            .catch(err => { console.log('loi fetch data', err) })
            .then((response) => {
                response.json()
            })
    },
    post: (url, data, token) => {
        if ((url + '').indexOf('http') === -1) url = config.HOST + '/' + url

        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + (token || localStorage.getItem('RFTK') ? localStorage.getItem('RFTK') : api.getToken()),
            'Accept-Language': api.getLang()
        }
        return new Promise(function (resolve, reject) {
            let options = {
                method: 'POST',
                headers,
                body: JSON.stringify(data)
            };
            console.log('header', options)
            console.log('POST', url, headers),
                console.log('Body', JSON.stringify(data))
            fetch(url, options).then((response) => {
                try {
                    return response.json()
                } catch (err) {
                    reject({ err: 2, msg: 'Phiên làm việc hết hạn' });
                }
            }).then((rs) => {
                console.log('Response', rs)
                if (rs.err === 404) {
                    api.showMessage('Phiên làm việc hết hạn !')

                    return reject({ err: 404, msg: 'Phiên làm việc hết hạn' })

                }
                // if (rs.err == 2) {
                //     api.showMessage('Phiên làm việc hết hạn !')
                //     api.hideLoading();
                //     return reject({ err: 2, msg: 'Phiên làm việc hết hạn' })

                // }
                resolve(rs);
                // try{
                //     resolve(JSON.parse(data, (key, value) => {
                //         console.log(`[POST]${url}`,value);
                //         return value && value.type === 'Buffer'
                //             ? Buffer.from(value.data)
                //             : value;
                //     }));
                // }catch(err){
                //     console.log('parse json err', err, data);
                // }

            }).catch((err) => {
                console.log('error', err);
            })
        });

    }
}

export default request