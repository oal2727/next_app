import axios from 'axios'

let api = axios.create({
    baseURL:'http://localhost:3000/api'
})
let Api = function(){
    return api
}

export default Api
