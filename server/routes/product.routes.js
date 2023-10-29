import express from 'express'
import ProductCtrl from "../controllers/product.controller.js" 
import productController from '../controllers/product.controller.js'
const router = express.Router()
router.route('/api/Products') 
.get(ProductCtrl.list)
.post(ProductCtrl.create)
.delete(ProductCtrl.removeAll)
router.route('/api/Products/:ProductId') 
.get(ProductCtrl.read)
.put(ProductCtrl.update) 
.delete(ProductCtrl.remove)
router.param('ProductId', ProductCtrl.ProductByID)
router.route('/api/Products').post(ProductCtrl.create) 
router.route('/api/Products').get(ProductCtrl.list)
router.param('ProductId', ProductCtrl.ProductByID)
router.route('/api/Products/:ProductId').get(ProductCtrl.read)
router.route('/api/Products/:ProductId').put(ProductCtrl.update)
router.route('/api/Products/:ProductId').delete(ProductCtrl.remove)
router.get('/api/products', ProductCtrl.findAllName);
    
export default router
