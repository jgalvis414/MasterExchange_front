import axios  from "axios"


export const API = axios.create({
    baseURL: 'http://localhost:8888/',
    timeout: 10000,
})

export const endpoint = {
    GET_DATA_CHART: '/fn-data-chart?crypto=',
    CREATE_TOKEN: '/fn-loginToken',
    PRICE_COIN: '/fn-tickerPrice?crypto=',
    DATA_USER: '/fn-getDataUser',
 
}



