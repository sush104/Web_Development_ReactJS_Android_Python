import axios from 'axios'
// Create instance called instance
const instance = axios.create({
    baseURL: 'https://bikeez.herokuapp.com',
});



// var bodyFormData = new FormData();
// bodyFormData.append('email', 'martin.heidegger@gmail.com');
// bodyFormData.append('hashed_password', 'Pass@123');

export default {
    getData: (bodyFormData) =>
    instance({
        method:'POST',
        url:'/operators/details',
        data:  bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    }),
    login: (bodyFormData) =>
    instance({
        method:'POST',
        url:'/operators/login',
        data:  bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    })
}
