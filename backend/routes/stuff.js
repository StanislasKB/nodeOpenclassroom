const express=require('express');
const Thing = require('../models/Thing');
const router=express.Router();
const stuffCtrl=require('../controllers/stuff');
const auth=require('../middleware/auth');

router.post('/',auth,stuffCtrl.createThing);
router.delete('/:id',auth, stuffCtrl.deleteThing);
router.get('/:id',auth, stuffCtrl.getOneThing);
router.put('/:id',auth, stuffCtrl.modifyThing);
router.get('/',auth, stuffCtrl.getAllThing);


module.exports=router;