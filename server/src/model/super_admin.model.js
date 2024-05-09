import { PrismaOffert } from '@prisma/Super_Admin';
const prisma = new PrismaSuper_Admin();


const Super_AdminModel = {
  deleteSuper_Admin: async (req, res) => {
    const result = await prisma.Super_Admin.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    return result;

},

createSuper_Admin: async (req, res) => {
  const result = await prisma.Super_Adminsment.create ({
    data: req.body,

  });
  res.json(result)
}

}

export default Super_AdminModel;