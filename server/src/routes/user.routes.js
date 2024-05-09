import  Routes  from "express";
import UserController from "../controllers/user.controller.js";

const RoutesUser = Routes();

RoutesUser.route('/users').get(UserController.getAllUsers)
RoutesUser.route('/users').post(UserController.createUsers)
RoutesUser.route('/users').get(UserController.getUsers)
RoutesUser.route('/users/:id').delete(UserController.deleteUser)
RoutesUser.route('/users').put(UserController.updateUsers)



export default RoutesUser;