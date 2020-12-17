const mongoose = require('mongoose')
const uri= 'mongodb://localhost/myapp'
mongoose.connect(uri,{
    useNewUrlParser:true,useUnifiedTopology: true
}).then(()=>{
    console.log("conected")
}).catch(err =>{
    console.log(err)
})