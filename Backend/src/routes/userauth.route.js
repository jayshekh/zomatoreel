import express from 'express';
import { userLogin, userLogout, userRegister } from '../controllers/userauth.controller.js';
import authUser from '../middleware/authUser.js';
import { getAllFoodItems } from '../controllers/food.controller.js';

const userAuthRouter = express.Router();

userAuthRouter.post("/userregister", userRegister);
userAuthRouter.post("/userlogin", userLogin);
userAuthRouter.get("/userlogout", userLogout);

userAuthRouter.get("/getallfoods", authUser, getAllFoodItems);

export default userAuthRouter;