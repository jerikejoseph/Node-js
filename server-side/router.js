import { Router } from "express";
import { addDonor } from "./requestHandler.js";
const router=Router();
router.route("/adddonor").post(addDonor);
router.route("/getdonor").post(getDonor);
export default router 