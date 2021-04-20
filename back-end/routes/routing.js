var express = require('express');
const { route } = require('../app');
var router = express.Router();
var multer =require('multer');

//Import controller
var index =require( '../controllers/index');
var controllerUser=require( '../controllers/controllerUser');
var wardrobeController=require('../controllers/wardrobeController');
var DressesController=require('../controllers/DressesContoller');
const storage=multer.diskStorage({
    destination:function(req,file,cb){
    cb(null,'./upload/');
    },
    filename:function(req,file,cb){
      cb(null,file.originalname);
    }
        
    
});
const upload=multer({storage:storage});


router.get('/all',index.getAll);
//Router for userController
router.get('/all1',controllerUser.getAll);
router.post('/register',controllerUser.register);
router.post('/login',controllerUser.login);
router.put('/updteUser/:id',controllerUser.Update);
router.put('/del/:id',controllerUser.deleteUser);
router.get('/alluser',controllerUser.getUser);
router.delete('/deletedUser/:idd',controllerUser.deleteUser);
//Router For wardrobecontroller
router.get('/indexes',wardrobeController.index);
router.post('/addwardrobe',upload.single('image'),wardrobeController.addWardrobe);
router.post('/postwardrobe1',upload.single('image'),wardrobeController.createWardrobe);

router.post('/hello',index.postUser1);

//router.post('/addDress',upload.single('image'),DressesController.add);
router.post('/pic',DressesController.add);
router.get('/allDresses',DressesController.getDresses);
router.delete('/deleteDress/:id',DressesController.delete);



module.exports = router;
