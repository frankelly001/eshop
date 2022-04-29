import http from "./httpService";
import config from "../config.json"

const products = `${config.apiUrl}/products`

const getCategories = () => {
    return http.get(`${products}/categories`)
}

const getProducts = () => {
    return http.get(products)
}

const getProductDetails = (productId) => {
    return http.get(`${products}/${productId}`)
}

const users = () => {
    return http.get(`${config.apiUrl}/users`)
}

export {
    getCategories,
    getProducts,
    getProductDetails,
    users
}