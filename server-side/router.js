import { Router } from "express";
import { addDonor } from "./requestHandler.js";
const router=Router();
router.route("/adddonor").post(addDonor);

export default router 