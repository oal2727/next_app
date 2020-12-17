import Api from './api'

export default{
    AddPedido(){
        return Api().post('/pedido')
    },
    GetPedido(){
        return Api().get('/pedido')
    },
}