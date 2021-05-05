var express = require('express');
const { route } = require('../app');
var router = express.Router();
var multer =require('multer');
var passport=require('passport');
var DressesController=require('../controllers/DressesContoller');
var wardrobeController=require('../controllers/wardrobeController');
var verify =require('../controllers/VerifyToken');
var preferencesController=require('../controllers/preferencesController');
var authenticate=require('../controllers/userManager/authenticate');
var forgotPassword=require('../controllers/userManager/forgotPassword');
var controllerUser=require( '../controllers/controllerUser');
var productController=require('../controllers/productController');
var sendMailer=require('../controllers/userManager/sendMailer');
const WardrobeController = require('../controllers/wardrobeController');
var storage = multer.diskStorage({   
  destination: function(req, file, cb) { 
     cb(null, 'uploads/');    
  }, 
  filename: function (req, file, cb) { 
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
     cb(null , file.originalname);   
  }
});
const upload=multer({storage:storage});
//Routes for userController
router.post('/register',upload.single('image'),controllerUser.register);
router.post('/login',controllerUser.login);
router.put('/updateUser',upload.single('image'),verify,controllerUser.Update);
router.get('/alluser',controllerUser.getUser);
router.get('/profile',verify,controllerUser.profile);

router.delete('/deleteUser',verify,controllerUser.deleteUser);
router.post('/forgotPassword',forgotPassword.forgotPassword);
router.post('/resendPassword',forgotPassword.resendPassword);

//LogIn with Google
router.post('/api/googleLogin',authenticate.googleLogin);
router.post('/api/googleRegister',authenticate.googleRegister);
router.post('/api/facebookLogin',authenticate.facebookLogin);
router.post('/api/facebookRegister',authenticate.facebookRegister);

//Routes For Prefenrences
router.post('/addPreferences',verify,preferencesController.addPreferences);
router.put('/updatePreferences',verify,preferencesController.updatePreference);
router.get('/userPreferences',preferencesController.getUserPreferences);
//Routes for the Shop
router.get('/products',productController.getProducts);
router.get('/type',productController.getProductType);
router.get('/style',productController.getProductStyle);
router.get('/shop/user',verify,productController.getUsserPref);
router.get('/filterProduct/:type',productController.filterProduct);
router.get('/filterProductSize/:size',productController.filterProductSize);
router.get('/filterProductSex/:sex',productController.filterProductSex);
router.get('/filterProductStyle/:style',productController.filterProductStyle);

router.post('/addProducts',upload.single('image'),productController.addProducts);
router.post('/sendMail/:Email',sendMailer.sendMail);
router.post('/addWardrobe',wardrobeController.createWardrobe);
router.get('/getWardrobe/:user_id',WardrobeController.findWardrobe)
router.delete('/deleteWardrobe/:user_id',wardrobeController.deletewardrobe);
//Routes For Dresses Controller
//router.post('/addDress',upload.single('image'),DressesController.add);
router.post('/pic',DressesController.add);
router.get('/allDresses',DressesController.getDresses);
router.delete('/deleteDress/:id',DressesController.delete);



module.exports = router;
