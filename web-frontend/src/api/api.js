import axios from 'axios'
// Create instance called instance
const instance = axios.create({
    baseURL: 'https://bikeez.herokuapp.com',
});

var data = {"id" : 300}
var bodyFormData = new FormData();
bodyFormData.append('id', '300');
export default {
    getData: () =>
    instance({
        method:'POST',
        url:'/operators/details',
        data:  bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    })
}
