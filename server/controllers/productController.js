
const Product = require('../models/productModels')
const{sendRes} =require("../helper/sendRes")
const {makeFilterObject} =require('../helper/makeFilterObject')

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


module.exports.getAllProducts = async (req, res)=>{
    // res.send('get works!')
    const queryStr = JSON.stringify(req.query)
    // const modifiedQueryStr = queryStr.replace(/\b(lt|lte|gt|gte)/g,expr =>$ + expr)
    // const modyfiedQuery = JSON.parse(modifiedQueryStr)
    // console.log(modyfiedQuery)
    try{const pro = await Product.find()
        sendRes(res,pro,200)}
    catch(err){
        sendRes(res, err, 400, true)
    }
}
module.exports.getProductById = async (req, res)=>{
    const{id} = req.params;
    try{console.log('its works')
const product = await Product.findById(id)
sendRes(res,product,200)}
catch(err){ sendRes(res, err, 400, true)}
}
module.exports.deleteProductById = async (req,res)=>{
    const{id} =req.params;
    try {
        await Product.deleteOne({_id: id})
        sendRes(res, {} ,204)
    } catch (error) {
        sendRes(res, err, 400, true)
    }
}
module.exports.checkIdInParams=(req,res,next)=>{
    if(!req.params.id){
        const err = {message:'No Id in params'}
        sendRes(res, err, 400, true)
        return
    }
    next()
}
module.exports.updateProduct = async (req,res)=>{
    const{id } =req.params;
    try {
        const product = await Product.findByIdAndUpdate(id,req.body,{
            new: true,
            runValidators: true
        })
        const products = await Product.find({category: 'Art Punk'})
        // products.forEach
        products.price = 1
        pr.save({
            runValidators: true
        });
        sendRes(res,product,200)
    } catch (error) {
        sendRes(res, err, 400, true)
    
    }
}