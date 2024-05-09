import  Routes  from "express";
import Super_AdminController from "../controllers/super_admin.controller.js";

const RoutesSuper_Admin = Routes();

RoutesSuper_Admin.route('/super_admin').get(TeamController.getAllSuper_Admins)
RoutesSuper_Admin.route('/super_admin').post(TeamController.createSuper_Admins)
RoutesSuper_Admin.route('/super_admin').get(TeamController.getSuper_Admins)
RoutesSuper_Admin.route('/super_admin/:id').delete(TeamController.deleteSuper_Admin)
RoutesSuper_Admin.route('/super_admin').put(TeamController.updateSuper_Admins)



export default RoutesSuper_Admin;