import { Router } from "express";
import { getTeamData } from "../controller/teamControl";

const teamRoutes = Router();

teamRoutes.get('/', getTeamData);

export default teamRoutes;