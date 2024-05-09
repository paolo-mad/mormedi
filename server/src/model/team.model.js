import { PrismaOffert } from '@prisma/team';
const prisma = new PrismaTeam();


const TeamModel = {
  deleteTeam: async (req, res) => {
    const result = await prisma.team.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    return result;

},

createTeam: async (req, res) => {
  const result = await prisma.equipment.create ({
    data: req.body,

  });
  res.json(result)
}

}

export default TeamModel;