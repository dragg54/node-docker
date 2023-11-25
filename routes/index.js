import { Router } from "express";
import { addEmployee } from "../controllers/Employee.js";

const router = Router()

router.post("/employee", addEmployee)

export default router