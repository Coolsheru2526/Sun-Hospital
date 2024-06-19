import express from "express";
import { patientRegister,login,addNewAdmin,getAllDoctors, getUserDetails,logoutAdmin,logoutPatient, addNewDoctor } from "../controller/userControler.js";
import { isAdminAuthenticated,isPatientAuthenticated } from "../middlewares/auth.js";



const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login",login);
router.post("/admin/addnew",isAdminAuthenticated,addNewAdmin);
router.get("/doctors",getAllDoctors);
router.get("/admin/me",isAdminAuthenticated,getUserDetails);
router.get("/patient/me",isPatientAuthenticated,getUserDetails);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.post("/doctor/addnew",isAdminAuthenticated,addNewDoctor);

export default router;