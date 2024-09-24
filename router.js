import { Router } from "express";
import * as rh  from "./requestHandler.js"

const router=Router()
router.route("/addEmployee").post(rh.addEmp);
// router.route("/getdonors").get(rh.getDonors);


export default router;