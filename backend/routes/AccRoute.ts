import { Router } from "express";
import { getAccountIndustryData } from "../controller/AccControl";


const accountRoutes = Router();

accountRoutes.get('/', getAccountIndustryData);


export default accountRoutes;