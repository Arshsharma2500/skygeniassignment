import { Router } from "express";
import { getProductLineData } from "../controller/productLine";

const productRoutes = Router();

productRoutes.get('/', getProductLineData);

export default productRoutes;