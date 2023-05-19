import { NextFunction, Request, Response } from "express";
import { createUserToDb, getAdminUsersFromDB, getUserByIdFromDB, getUserFromDB } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {

    const data = req.body;
    const user = await createUserToDb(data);

    res.status(200).json({
        status: "success",
        data: user,
    });

};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getUserFromDB();
    res.status(200).json({
        status: "success",
        data: user,
    })

}

export const getUserById=async( req: Request, res:Response, next:NextFunction)=>{
    const {id} =req.params;
    const user= await getUserByIdFromDB(id);
    console.log("admin users" ,id)
    res.status(200).json({
        status:"success",
        data:user
    })
}

export const getAdminUsers=async(req:Request, res:Response, next:NextFunction)=>{
   
const user=await getAdminUsersFromDB();

res.status(200).json({
    status:"success",
    data:user
})

}




//patern
// route=>controller=> service