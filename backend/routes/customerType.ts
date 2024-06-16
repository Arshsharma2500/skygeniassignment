import { Router } from "express";
import { getCustomerTypeData } from "../controller/customerType";

const customerTypeRoutes = Router();

customerTypeRoutes.get('/', getCustomerTypeData);


export default customerTypeRoutes;