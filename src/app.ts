
import express,{Request,Response,NextFunction} from 'express';
import userRoutes from './routes/users';
import bodyParser from 'body-parser';
import cors from 'cors'
import path from 'path';
import db from './config/dbconnect'; 

const app=express();
app.use(cors())


// Testing db connection via sequelize
db.authenticate()
.then(() => console.log('Database Connected..'))
.catch((err:Error) => console.log('Error:' + (err)))

app.use(bodyParser.json());


app.use('/user',userRoutes);



app.use((err:Error ,req:Request,res:Response,next:NextFunction)=>{
res.status(500).json({message:err.message});
});
app.listen(5000);






