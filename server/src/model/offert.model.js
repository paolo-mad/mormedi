import { PrismaOffert } from '@prisma/offert';
const prisma = new PrismaOffert();


const OffertModel = {
  deleteOffert: async (req, res) => {
    const result = await prisma.offert.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    return result;

},

createOffert: async (req, res) => {
  const result = await prisma.offerts.create ({
    data: req.body,

  });
  res.json(result)
}

}

export default OffertModel;