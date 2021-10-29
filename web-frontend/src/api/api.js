import axios from 'axios'
// Create instance called instance
const instance = axios.create({
    baseURL: 'https://bikeez.herokuapp.com',
});



 var bodyFormData = new FormData();
// bodyFormData.append('email', 'martin.heidegger@gmail.com');
// bodyFormData.append('hashed_password', 'Pass@123');

export default {
    getCycle: () =>
    instance({
        method:'GET',
        url:'/operators/showcycle',
        headers: { "Content-Type": "multipart/form-data" },
    }),
    login: (bodyFormData) =>
    instance({
        method:'POST',
        url:'/operators/login',
        data:  bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    }),
    getStation: () =>
    instance({
        method:'GET',
        url:'/operators/showstation',
        headers: { "Content-Type": "multipart/form-data" },
    }),
    getStatus: () =>
    instance({
        method:'GET',
        url:'operators/showstatus',
        headers: { "Content-Type": "multipart/form-data" },
    }),
    deleteCycle: (cycle_id) =>
    instance({
        method:'DELETE',
        url:'/operators/deletecycle',
        data: cycle_id,
        headers: { "Content-Type": "multipart/form-data" },
    }),
    addCycle: (details) =>
    instance({
        method: 'POST',
        url: '/operators/addcycles',
        data: details,
        headers: { "Content-Type": "multipart/form-data" },
    }),
    updateCycle: (cycledata) =>
    instance({
        method: 'PUT',
        url: 'operators/movecycle',
        data: cycledata,
        headers: { "Content-Type": "multipart/form-data" },
    }),
    showDamagedCycle: () =>
    instance({
        method: 'GET',
        url: 'operators/repair',
        headers: { "Content-Type": "multipart/form-data" },
    })
}
