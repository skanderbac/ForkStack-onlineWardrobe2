var express = require("express");
var router = express.Router();

const Controller = require('../controllers/DressesContoller')

router.route('/').post(Controller.add)
                 .get(Controller.getDresses)


module.exports = router;
