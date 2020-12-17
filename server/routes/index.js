const express = require("express");
const router = express.Router();
const Pedido = require("../models/Pedido")

function routes(app) {
  router.get("/ListPedido", (req, res) => {
    const data ={nombre:'jose'}
    return res.render(req,res,"/ListPedido",{data:data});
  });

  router.get('/pedido',async(req,res)=>{
        // try{
        const pedido = await Pedido.find()
        return res.status(200).json(pedido)
    //  }catch(err){
    //      return res.status(400).json(err)
    //  }
  })
  router.get('/pedidoget',(req,res)=>{
      return res.status(200).send("api get")
  })

  // router.get("/post/:id", (req, res) => {
  //   return app.render(req, res, "/post", { id: req.params.id });
  // });

  return router;
};

module.exports = routes;













// const express = require("express");
// const Pedido = require("../models/Pedido")
// const router = express.Router();

// // function routes(app) {
//   router.get("/movies", (req, res) => {
//     res.end("We made it! And it's beat");
//   });
//   router.get('/pedido',async(req,res)=>{
//      try{
//         const pedido = await Pedido.find()
//         return res.status(200).json(pedido)
//      }catch(err){
//          return res.status(400).json(err)
//      }
      
//   })

//   router.post("/pedido",async(req,res)=>{
//        try{ 
//             const {categoria,nombre,precio,cantidad} = req.body
//             let categorianombre
//             if(categoria == 1){
//                 categorianombre="Lacteos"
//             }else if(categoria == 2){
//                 categorianombre="Embutidos"
//             }else{
//                 categorianombre="Liquidos"
//             }
//             const pedido = new Pedido()
//             pedido.categoria=categorianombre
//             pedido.nombre=nombre
//             pedido.precio=precio
//             pedido.cantidad=cantidad
//             await pedido.save()
//             console.log(pedido)
//             return res.status(200).json(pedido)

//        }catch(err){
//            return res.status(400).json(err)
//        }
//         // const pedido = new Pedido()
//   })
//   router.delete('/pedido/:id',async(req,res)=>{
//         const id = req.params.id
//         const pedido  = await Pedido.findByIdAndDelete(id)
//         return res.status(200).json(pedido)
//   })

//   router.put("/pedido/:id",async(req,res)=>{
//     const id = req.params.id
//     try{ 
//         const {categoria,nombre,precio,cantidad} = req.body
//         let categorianombre
//         if(categoria == 1){
//             categorianombre="Lacteos"
//         }else if(categoria == 2){
//             categorianombre="Embutidos"
//         }else{
//             categorianombre="Liquidos"
//         }
//         const param = {
//             categoria:categorianombre,
//             nombre,
//             precio,
//             cantidad
//         }
//         const pedido = await Pedido.findByIdAndUpdate(id,param)
//         return res.status(200).json(pedido)
//     }catch(err){
//         return res.status(400).json(err)
//     }
//      // const pedido = new Pedido()
// })
  
  
//   router.get("/movies/:id", (req, res) => {
//     return app.render(req, res, "/post", { id: req.params.id });
//   });

// //   return router;
// // };

// module.exports = router;