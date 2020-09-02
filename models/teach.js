const mongoose = require('mongoose')

// comments
const commentSchema = new mongoose.Schema({
  author: {
    type: String,
    default: "Anonymous"
  },
  content: String,
  date: Date
})

// posts
const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  comments: [commentSchema]
})

module.exports = mongoose.model('Post', postSchema)


// How to add a comment to a post
const post = new post({title: "Cool Cats", body: "O'Malley takes the cake"})
post.comments.push({ content: "This is Cheshire errasure", date: Date.now() })
post.save().then(() => {
  // stuff
})

// Delete a comment
Post.findById(req.params.id).then(post =>{
  post.id(req.params.commentId).remove()
  post.save()
})

// * ----------------- Referencing Documents --------------- *

// product.js
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: Number
})

const Product = mongoose.model('Product', productSchema)

// order.js
const orderSchema = new mongoose.Schema({
  orderDate: Date,
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }]
})

const Order = mongoose.model('Order', orderSchema)

// Access all products of an order
Order.findById(id).populate('products').then(order => {
  console.log(order.products)
})

let newOrder = new Order({date: Date.now()})
let newProduct = new Product({ name: 'bearings', price: 30})
newOrder.products.push(newProduct)
newOrder.products.push(new Product({ name: "wheels", price: 80 }))
order.save()