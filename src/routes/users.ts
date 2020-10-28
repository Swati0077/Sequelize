// for configuring routes
import {Router} from 'express';
//import {getUser} from '../controller/users'
//import {getUser,updateUser,deleteUser} from '../controller/users'
import db from '../config/dbconnect';
import usermodel from '../models/users';


const router=Router();
//router.post('/');


router.get('/get',(req,res)=>
usermodel.findAll()
    .then(data =>
         {
        console.log(data);
        res.json(data);
         })
    .catch(err => console.log(err))
);

router.post('/postUser',(req,res)=>{
    const user = req.body
    usermodel.create(user).then(data => {console.log(data)
    res.send(data)}).catch(err => console.log(err))
})
//router.patch('/edit/:id',updateUser);
 
//router.delete('/delete/:id',deleteUser);
router.delete('/deleteUser/:id',(req,res)=>{
    usermodel.destroy({
        where: {
          id: req.params.id
        }
      }).then(data => res.json(data)).catch(err => console.log(err))
})

router.patch('/updateUser/:id',(req,res)=>{
    usermodel.update(
        req.body,
        {
          where: {
            id: req.params.id
          }
        }
      ).then(data => res.json(data)).catch(err => console.log(err))
})

export default router;
