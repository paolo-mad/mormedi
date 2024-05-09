import  Routes  from "express";
import OffertController from "../controllers/offert.controller.js";

const RoutesOffert = Routes();

RoutesOffert.route('/offerts').get(OffertController.getAllOfferts)
RoutesOffert.route('/offerts').post(OffertController.createOfferts)
RoutesOffert.route('/offerts').get(OffertController.getOfferts)
RoutesOffert.route('/offerts/:id').delete(OffertController.deleteOffert)
RoutesOffert.route('/offerts').put(OffertController.updateOfferts)



export default RoutesOffert;