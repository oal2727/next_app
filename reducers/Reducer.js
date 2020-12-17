export  const PedidoReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_PEDIDO':
            return {
                ...state,
                pedido:[
                    ...state,
                    action.payload
                ]
            }
        default:
            return state    
    }
}