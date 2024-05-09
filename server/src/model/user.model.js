import { PrismaOffert } from '@prisma/user';
const prisma = new PrismaUser();


const UserModel = {
  deleteUser: async (req, res) => {
    const result = await prisma.user.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    return result;

},

createUser: async (req, res) => {
  const result = await prisma.users.create ({
    data: req.body,

  });
  res.json(result)
}

}

export default UserModel;