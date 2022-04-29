import http from "./httpService";
import config from "../config.json"

const loginAuthApi = `${config.apiUrl}/auth/login`;
const signupAuthApi = `${config.apiUrl}/users`

export const login = (user) => {
    return http.post(loginAuthApi, user)
    // localStorage.setItem()
}

export const signup = (user) => {
    return http.post(signupAuthApi, user)
}


// {
//     "email":"John@gmail.com",
//     "username":"johnd",
//     "password":"m38rmF$",
//     "name":{
//         "firstname":"John",
//         "lastname":"Doe"
//     },
//     "address":{
//         "city":"kilcoole",
//         "street":"7835 new road",
//         "number":3,
//         "zipcode":"12926-3874",
//         "geolocation":{
//             "lat":"-37.3159",
//             "long":"81.1496"
//         }
//     },
//     "phone":"1-570-236-7033"
// }