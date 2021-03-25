import axios from 'axios';
import authHeader from './auth-header';
import storage from '../utils/storage';
class Qualification {
    getInfo = () => {
        return axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/qualification/info`, {
            headers: authHeader(storage.getStorage('token')),
        })
        .then(response => {
            if (response.data.code === 401) {
                storage.removeStorage('token');
                storage.removeStorage('role');
                return response.data;
            } else if (response.data.code === 200) {
                return response.data;
            }
        }).catch(error => {
            return error;
        })
    }
    get = (id) => {
        return axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/qualification`, {
            headers: authHeader(storage.getStorage('token')),
            params: {
                id: id
            },
        })
        .then(response => {
            if (response.data.code === 401) {
                storage.removeStorage('token');
                storage.removeStorage('role');
                return response.data;
            } else if (response.data.code === 200) {
                return response.data;
            }
        }).catch(error => {
            return error;
        })
    }
    create = (name, type, ambassador) => {
        return axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/qualification`, {
            name: name,
            type: type,
            ambassador: ambassador
        }, {
            headers: authHeader(storage.getStorage('token'))
        }).then(response => {
            if (response.data.code === 401)
                storage.removeStorage('token');
            return response.data;
        }).catch(error => {
            return error;
        })
    }
    
    getListByOption = (sort_column, sort_order, count, page, searchId, searchName, searchType, searchAmbassador) => {
        return axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/qualification/getListByOption`, {
            sort_column: sort_column,
            sort_order: sort_order,
            count: count,
            page: page,
            searchId: searchId,
            searchName: searchName,
            searchType: searchType,
            searchAmbassador: searchAmbassador
        }, {
            headers: authHeader(storage.getStorage('token'))
        })
        .then(response => {
            if (response.data.code === 401)
                storage.removeStorage('token');
            return response.data;
        }).catch(error => {
            return error;
        })
    }

    update = (name, type, ambassador, id) => {
        return axios
        .put(`${process.env.REACT_APP_BACKEND_URL}/qualification`, {
            name: name,
            type: type,
            ambassador: ambassador,
            id: id
        }, {
            headers: authHeader(storage.getStorage('token'))
        })
        .then(response => {
            if (response.data.code === 401)
                storage.removeStorage('token');
            return response.data;
        }).catch(error => {
            return error;
        })
    }

    delete = (id) => {
        return axios
        .delete(`${process.env.REACT_APP_BACKEND_URL}/qualification`, {
            headers: authHeader(storage.getStorage('token')),
            params: {
                id: id
            }, 
        })
        .then(response => {
            if (response.data.code === 401)
                storage.removeStorage('token');
            return response.data;
        }).catch(error => {
            return error;
        })
    }
}
export default new Qualification();