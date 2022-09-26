import axios  from "axios"


export const API = axios.create({
    baseURL: 'https://comforting-bunny-ac7ccc.netlify.app',
    timeout: 10000,
})
//http://localhost:8888/fn-getWalletNetwork?crypto=
//https://comforting-bunny-ac7ccc.netlify.app/fn-getDataUser?user=testing7@gmail.com
export const endpoint = {
    GET_DATA_CHART: '/fn-data-chart?crypto=',
    CREATE_TOKEN: '/fn-loginToken',
    PRICE_COIN: '/fn-tickerPrice?crypto=',
    DATA_USER: '/fn-getDataUser?user=',
    GET_WALLET: '/fn-getWalletNetwork?crypto=',
    VALIDATE_DEPOSIT: '/fn-ValidateDeposit'
 
}




