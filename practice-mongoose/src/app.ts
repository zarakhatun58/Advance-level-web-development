import express, { Application, NextFunction, Request, Response } from 'express';
import cors from "cors";
import { Schema, model } from 'mongoose';


const app: Application = express();

//application routes
import userRoutes from './app/modules/user/user.route'

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//app.get('/api/v1/user', userRoutes) ;
  app.use('/api/v1/user', userRoutes);
  
export default app;





  // res.send('Hello World!');
    // next()
    /* insert in a test data into mongodb
    step 1: Interface 
    step 2: Schema
    step 3:model
    step 4: database query  
        */

    //createUserToDb();



//patern MVC , Moduler
/*
break down 
Interface, Schema, model ---models.ts
route
route => function --controller .ts
Database query => function --- service
*/