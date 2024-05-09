import UserModel from "./src/models/user.model.js"




deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = await UserModel.deleteUser(req, res);

    res.json(deleteUser);
  } catch (error) {
    console.log(error);
  }
}
,
createUser= async (req, res) => {
      const {
          username,
          email,
          type_of_rol,
          password
          

      } = req.body;
      console.log(req.body);
      if (
          !username || 
          !email ||
          !type_of_rol ||
          !password
          
      ) {
          return res 
          .status(400)
          .json({mesaje: "pleace provide all trip details"})
      }
  await UserModel.createUser(req, res);
}

export default UserController;