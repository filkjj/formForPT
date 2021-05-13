const router = require('express').Router();
const { Patient_Info } = require('./database')

router.post('/newIntakeData',async (req,res,next)=>{
    try{
        const { body } = req;
        await Patient_Info.create(body);
    }catch(err){
        next(err);
    }
});


module.exports = router;