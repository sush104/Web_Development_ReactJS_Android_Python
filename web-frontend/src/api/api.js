import axios from 'axios'
// Create instance called instance
const instance = axios.create({
    baseURL: 'https://bikeeez.herokuapp.com',
});

//var bodyFormData = new FormData();
// bodyFormData.append('email', 'martin.heidegger@gmail.com');
// bodyFormData.append('hashed_password', 'Pass@123');

export default {
    getCycle: () =>
    instance({
        method:'GET',
        url:'/cycles/show',
        headers: { "Content-Type": "multipart/form-data" },
    }),
    login: (loginData) =>
    instance({
        method:'POST',
        url:'/operators/login',
        data:  loginData,
        headers: { "Content-Type": "multipart/form-data" },
    }),
    logout: (logoutData) =>
    instance({
        method:'POST',
        url:'/operators/logout',
        data:  logoutData,
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
    }),
    showActiveCycles : () =>
    instance({
        method: 'GET',
        url: '/cycles/showactive',
        headers: { "Content-Type": "multipart/form-data" },
    }),
    showActiveTripDetails: (cycle_id) =>
    instance({
        method: 'POST',
        url: '/cycles/activetripdetails',
        data: cycle_id,
        headers: { "Content-Type": "multipart/form-data" },
    }),
    showPieChart : () => 
    instance({
        method: 'GET',
        url: '/managers/showpie',
        headers: { "Content-Type": "multipart/form-data" },
    }),
    showBarChart : () => 
    instance({
        method: 'GET',
        url: '/managers/showstatbar',
        headers: { "Content-Type": "multipart/form-data" },
    }),
    operatorDetails: (id) =>
    instance({
        method: 'POST',
        url: '/operators/details',
        data: id,
        headers: { "Content-Type": "multipart/form-data" },
    }),
    managerLogin: (loginDetails) =>
    instance({
        method: 'POST',
        url: '/managers/login',
        data:  loginDetails,
        headers: { "Content-Type": "multipart/form-data" },
    }),
    managerLogout: (logoutData) =>
    instance({
        method:'POST',
        url:'/managers/logout',
        data:  logoutData,
        headers: { "Content-Type": "multipart/form-data" },
    }),
    managerDetails: (manager_id) =>
    instance({
        method: 'GET',
        url: '/managers/showdetail',
        data: manager_id,
        headers: { "Content-Type": "multipart/form-data" },
    }),
    addOperator: (operatorDetails) =>
    instance({
        method: 'POST',
        url: '/managers/addoperator',
        data: operatorDetails,
        headers: { "Content-Type": "multipart/form-data" },
    }),
    showLineChart: () =>
    instance({
        method: 'GET',
        url: '/managers/showline',
        headers: { "Content-Type": "multipart/form-data" },
    }),
    showTripCompleteBarChart: () =>
    instance({
        method: 'GET',
        url: '/managers/tripgraph',
        headers: { "Content-Type": "multipart/form-data" },
    }),
    showStackedBarChart: () =>
    instance({
        method: 'GET',
        url: '/managers/availdamagbar',
        headers: { "Content-Type": "multipart/form-data" },
    })

}
