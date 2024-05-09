import { PrismaOffert } from '@prisma/report';
const prisma = new PrismaReport();


const ReportModel = {
  deleteReport: async (req, res) => {
    const result = await prisma.report.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    return result;

},

createReport: async (req, res) => {
  const result = await prisma.reports.create ({
    data: req.body,

  });
  res.json(result)
}

}

export default ReportModel;