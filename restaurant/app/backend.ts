import axios from 'axios'

export const url = (url : string) => {
    return `http://localhost:8000/${url}`
}

export const get_categories = () => {
    return axios.get(url('categories'));
}

export const get_category = (pk : string) => {
    return axios.get(url(`category/${pk}`))
}

export const get_category_products = (pk : string) => {
    return axios.get(url(`category/${pk}/products`))
}

export const get_products = () => {
    return axios.get(url('products'));
}

export const get_featured_products = () => {
    return axios.get(url('products/featured'));
}

export const get_product = (pk : string) => {
    return axios.get(url(`product/${pk}`))
}

export const get_options = () => {
    return axios.get(url('options'));
}

export const get_option = (pk : string) => {
    return axios.get(url(`option/${pk}`))
}