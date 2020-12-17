const {Schema,model} = require('mongoose')

const PedidoSchema = new Schema({
    categoria:{type:String},
    nombre:{type:String},
    precio:{type:String},
    cantidad:{type:String}
})

module.exports= model('pedido',PedidoSchema)

