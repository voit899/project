
const Product = require('../models/productModels')
const{sendRes} =require("../helper/sendRes")

module.exports.createNewProduct = async (req, res)=>{
    try {
        const {name,price,image,category,size} = req.body;
        const newProduct = await Product.create({name,price,image,category,size})
       
  //send response     
        sendRes(res, newProduct,201)
        
     
     }catch(err){
        sendRes(res,err,400,true)
        
     }
        }


module.exports.getAllProducts = (req, res)=>{
    res.send('get works!')
}