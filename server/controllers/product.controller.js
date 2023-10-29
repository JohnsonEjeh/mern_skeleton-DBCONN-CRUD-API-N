import Product from '../models/product.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'

const create = async (req, res) => { 
const product = new Product(req.body); 
try {
await product.save();
return res.status(200).json({ 
message: "Successfully added to MarketPlace!"
});
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
});
} 
}

// const findAllName = async (req, res) => {
//     try {
//         let products = Product.find({name: req.query.name})
//     }
//     catch{
//         return res.status(400).json({
//         error: errorHandler.getErrorMessage(err) 
//     });
//     }
// }

const findAllName = async (req, res) => {
    const keyword = req.query.name; 

    if (!keyword) {
        return res.status(400).json({
            error: "Keyword 'name' is required in the query parameters."
        });
    }

    try {
        const products = await Product.find({ name: { $regex: new RegExp(keyword, 'i') } });
        return res.json(products);
    } catch (err) {
        return res.status(500).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
}

	
const ProductByID = async (req, res, next, id) => { 
try {
let product = await Product.findOne({_id: id}); 
if (!product)
return res.status(404).json({ 
error: "Product not found"
})
req.product = product
next()
} catch (err) {
return res.status(500).json({ 
error: "Could not retrieve Product"
}) ;
}
}

const read = (req, res) => {
return res.json(req.product); 
}

const list = async (req, res) => { 
try {
let Products = await Product.find().select('name description price quantity categories') 
res.json(Products)
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}

const update = async (req, res) => { 
try {
let product = req.product
product = extend(product, req.body) 
await product.save()
res.json(product) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}

const remove = async (req, res) => { 
try {
let product = req.product
let deletedProduct = await product.deleteOne() 
res.json(deletedProduct) 
} catch (err) {
 /*res.status(400).json({message:"Data not Deleted"})*/
 return res.status(400).json({error: errorHandler.getErrorMessage(err) })
} 
}

const removeAll = async (req, res) => {
    try {
        let deletedproducts = await Product.deleteMany({})
        res.json( "All product has been deleted")
    }
    catch (err){
        return res.status(400).json({error: errorHandler.getErrorMessage(err) })
    }
}
export default { create, ProductByID, read, list, remove, update, removeAll, findAllName }
