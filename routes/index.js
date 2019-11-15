
const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const mongoose = require('mongoose');
const cons = require('consolidate');

const ProductSchema = new mongoose.Schema({
  product_id:{
    type: Number,
    required: true
  },
  product_name: {
    type: String
  },
  product_price: {
    type: Number
  },
  product_category: {
    type: String
  },
  description: {
    type: String
  },
  product_image:{
    type: String
  }
  
});

const Product = mongoose.model('Product', ProductSchema);

//.............................................................................................................

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));


//add user
router.get('/adduser', (req, res) => {

  res.render('register');
});

   // DB Config
   const db = require('../config/key').MongoURI;

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  {
// Connect to MongoDB
mongoose.connect(db ,{ useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected in the index.js file....'))
  .catch(err => console.log(err));

    Product.find(function(err, response){
     if (err) throw err;
        res.render('product_views.ejs',{
       result: response
     });
 });

  }
);

//...................................changings here............................

//start from here......................................................................................................
 
  //route for insert data
  router.post('/save', function(req, res){
    var productInfo = req.body; //Get the parsed information
    
    if(!productInfo.product_name || !productInfo.product_price || !productInfo.product_category || !productInfo.description){
       res.render('show_message', {
          message: "Sorry, you provided worng info", type: "error"});
    } else {
       var newProduct = new Product({
          product_id: req.body.product_id,
          product_name: req.body.product_name,
          product_price: req.body.product_price,
          product_category: req.body.product_category,
          description: req.body.description,
          product_image: req.body.product_image
       });
    
       newProduct.save(function(err, response){
          if(err)
             throw err;
          else
             res.redirect('/dashboard');
       });
    }

  });

  //route for update data
  router.put('/update',(req, res) => {
    Product.update({product_id: req.body.id}, {product_name:req.body.product_name, product_price:req.body.product_price , 
      product_category: req.body.product_category, description : req.body.description , image : req.body.image} , 
      function(err, response){
          if(err) res.json({message: "Error in updating person with id " + req.params.id});
          res.redirect('/dashboard');
       });
  });
 
  //route for delete data
  router.post('/delete',(req, res) => {
    Product.findOneAndDelete( {product_name : req.body.product_name },function(err, response){
         if(err) res.json({message: "Error in deleting record "});
         else res.redirect('/dashboard');
      });
   });

  //end  here......................................................................................................

module.exports = router;