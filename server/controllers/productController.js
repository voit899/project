
const Product = require('../models/productModels')
const{sendRes} =require("../helper/sendRes")
const {makeFilterObject} = render('../helper/makeFilterObject')

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