import express from 'express';
import { foodpartnerLogin, foodpartnerLogout, foodpartnerRegister } from '../controllers/foodpartnerauth.controller.js';
import authFoodPartner from '../middleware/authFoodPartner.js';
import { addFoodItem, getAllFoodItems } from '../controllers/food.controller.js';
import { upload } from '../middleware/multer.js';
import authUser from '../middleware/authUser.js';

const foodpartnerRouter = express.Router();

//foodpartner controllers
foodpartnerRouter.post("/foodpartnerregister", foodpartnerRegister);
foodpartnerRouter.post("/foodpartnerlogin", foodpartnerLogin);
foodpartnerRouter.get("/foodpartnerlogout", foodpartnerLogout);

//Food Controllers
foodpartnerRouter.post("/additem", authFoodPartner, upload.single("video"), addFoodItem);



export default foodpartnerRouter;
