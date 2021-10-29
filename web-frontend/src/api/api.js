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
        url:'/cycles/show',
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
        url:'/cycles/delete',
        data: cycle_id,
        headers: { "Content-Type": "multipart/form-data" },
    }),
    addCycle: (details) =>
    instance({
        method: 'POST',
        url: '/cycles/add',
        data: details,
        headers: { "Content-Type": "multipart/form-data" },
    }),
    moveCycle: (moveDetails) =>
    instance({
        method: 'POST',
        url: 'cycles/move',
        data: moveDetails,
        headers: { "Content-Type": "multipart/form-data" },
    }),
    showDamagedCycle: () =>
    instance({
        method: 'GET',
        url: 'cycles/repair',
        headers: { "Content-Type": "multipart/form-data" },
    }),
    repairStatus: (cycleid) =>
    instance({
        method: 'POST',
        url: 'cycles/repairstatus',
        data: cycleid,
        headers: { "Content-Type": "multipart/form-data" },
    })
}
