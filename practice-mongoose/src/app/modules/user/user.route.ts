import express from "express";
import { createUser, getAdminUsers, getUserById, getUsers } from "./user.controller";
const router =express.Router()


router.get('/', getUsers);
router.post('/admins', getAdminUsers);
router.get("/:id", getUserById);
router.post('/create-user', createUser);


export default router;

/*
/:id
insert, insertMany not work in mongoose

*/