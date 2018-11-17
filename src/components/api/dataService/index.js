import { request, config, api } from '../../api';
import location from '../locations.json';

var dataService = {
    login(type, token) {
        let url = 'user/authCustomer'
        let data = {
            type,
            token,
            merchantKey: config.merchantKey
        }
        return request.post(url, data)
    },

    getCategory() {
        let url = 'user/profile'
        let data = {
        }
        return request.post(url, data)
    },
    getNews: (skip, limit) => {
        var url = 'news/getNews?page=34&api=getNews';
        var data = {
            skip: skip,
            limit: limit,
        }
        return request.post(url, data);
    },
    getNewInfo: (id) => {
        var url = 'news/getNewsInfo?page=34&api=getNewsInfo';
        var data = {
            id
        }
        return request.post(url, data)
    },
    getBanner() {
        var url = 'banner/getBanners?page=34&api=getBanners';
        return request.post(url)
    },

    getListPromotions: (skip, limit, category, promotionType, sort, search) => {
        var url = 'promotion/getListPromotions?page=34&api=getListPromotions';
        var data = {
            skip: skip,
            limit: limit,
            category: category,
            promotionType: promotionType,
            sort: sort,
            search,
        }
        return request.post(url, data);
    },

    getListMember: (memberType) => {
        var url = 'partner/getListMembers?page=34&api=getListMembers';
        var data = {
            memberType: memberType
        }
        return request.post(url, data);
    },
    getListCodes(skip, limit, promotion, status, startTime, endTime, promotionTypes) {
        var url = 'code/getListCodes?page=34&api=getListCodes';
        var data = {
            skip: skip,
            limit: limit,
            promotion: promotion,
            status: status,
            startTime: startTime,
            endTime: endTime,
            promotionTypes: promotionTypes
        }
        return request.post(url, data);
    },
    getListStamps: (skip, limit) => {
        var url = 'stamp/getListStamps?page=34&api=getListStamps';
        var data = {
            skip: skip,
            limit: limit
        }
        return request.post(url, data);
    },
    getPromotionInfo: (id) => {
        var url = 'promotion/getPromotionInfo?page=34&api=getPromotionInfo';
        var data = {
            promotion: id
        }
        return request.post(url, data);
    },
    getPartnerInfo: (id) => {
        var url = 'partner/getPartnerInfo?page=34&api=getPartnerInfo';
        var data = {
            partner: id
        }
        return request.post(url, data);
    },
    postRate(promotion, rate) {
        let url = 'rate/createRate?page=34&api=createRate'
        let data = {
            promotion,
            rate
        }
        return request.post(url, data)
    },
    toggleLike: (id) => {
        var url = 'like/toggleLike?page=34&api=toggleLike';
        var data = {
            promotion: id
        };
        return request.post(url, data);
    },
    getCode(promotion, pointType) {
        var url = 'promotion/getcode?page=34&api=getCode';
        var data = {
            promotion: promotion,
            pointType: pointType
        }
        return request.post(url, data);
    },
    postDoiSoat(username, password, code, billAmount) {
        let url = 'code/customerCheckoutByShopAccount?page=34&api=customerCheckoutByShopAccount'
        let data = {
            username,
            password,
            code,
            billAmount
        }
        return request.post(url, data)
    },
    updateUserInfo(name, email, phone, gender, birth, address, avatar, province, district, ward) {
        let url = 'user/updateProfile'
        let data = {
            name,
            email,
            phone,
            gender,
            birth,
            address,
            avatar,
            province,
            district,
            ward
        }
        return request.post(url, data, api.getToken())
    },

    getSuggestWords(skip, limit, category, text) {
        let url = 'suggestword/getSuggestWords'
        let data = {
            skip,
            limit,
            category,
            text
        }
        return request.post(url, data)
    },
    getListProvinces: () => {
        return location.provinces
    },

    getListDistricts: (idProvinces) => {
        let district = [];
        location.districts.map(item => {
            if (parseInt(item.parent) === idProvinces)
                district.push(item)
        })
        return district
    },
    getListWards: (idDistricts) => {
        let ward = [];
        location.wards.map(item => {
            if (parseInt(item.parent) === idDistricts)
                ward.push(item)
        })
        return ward
    },

    changeActiveCard: (card) => {
        var url = 'user/changeActiveCard?page=34&api=changeActiveCard';
        var data = {
            card
        }
        return request.post(url, data);
    },
    addCardCode: (code, member) => {
        var url = 'membercard/addMemberCard?page=34&api=addMemberCard';
        var data = {
            code,
            member
        }
        return request.post(url, data);
    },
    changePhoneNumber: (token) => {
        var url = 'user/changePhoneNumber?page=34&api=changePhoneNumber';
        var data = {
            token
        }
        return request.post(url, data);
    },


}

export default dataService;