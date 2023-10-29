import mongoose from 'mongoose'

const ProductsSchema = new mongoose.Schema({
 name: {
 type: String,
 trim: true,
 required: 'Name is required'
 },
 description: {
 type: String,
 trim: true,
required: 'Description is required'
 },
 price: {
  type: Number,
  required: 'Price is required'
 },
 quantity: {
  type: Number,
  required: 'Quantity is required'
 }
,
categories: {
  type: String,
  required: 'Categories is required',
  validate: {
    validator: function (value) {
      return ['men', 'women', 'teens'].includes(value.toLowerCase());
    },
    message: 'Invalid category. Allowed values are: men, women, teens.'
  }
}

 }, null);

export default mongoose.model('Product', ProductsSchema);

