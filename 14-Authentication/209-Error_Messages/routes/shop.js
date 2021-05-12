const express=require('express');
const router=express.Router();

const isAuthenticated=require('../middleware/authentication');
const csrf=require('../middleware/csrf');

const shopController=require('../controllers/shop');

router.get('/',csrf,shopController.getIndex);

router.get('/products',csrf,shopController.getProducts);

router.get('/products/:productid',csrf,shopController.getProduct);

router.get('/categories/:categoryid',csrf,shopController.getProductsByCategoryId);

router.get('/cart',csrf,isAuthenticated,shopController.getCart);

router.post('/cart',csrf,isAuthenticated,shopController.postCart);

router.post('/delete-cartitem',csrf,isAuthenticated,shopController.postCartItemDelete);

router.get('/orders',csrf,isAuthenticated,shopController.getOrders);

router.post('/create-order',csrf,isAuthenticated,shopController.postOrder);

module.exports=router;