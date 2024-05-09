import { Router } from "express";
import ClientController from "../controllers/client.controller.js";

const RoutesClients = Router();

RoutesClients.route("/clients")
    .get(ClientController.getAllClients)
    .post(ClientController.createClient)
    
export default RoutesClients