import ReportModel from "./src/models/report.model.js"




deleteReport = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteReport = await ReportModel.deleteReport(req, res);

    res.json(deleteReport);
  } catch (error) {
    console.log(error);
  }
}
,
createReport= async (req, res) => {
      const {
          stand_by,
          date_year
          

      } = req.body;
      console.log(req.body);
      if (
          !stand_by || 
          !date_year
          
      ) {
          return res 
          .status(400)
          .json({mesaje: "pleace provide all trip details"})
      }
  await ReportModel.createReport(req, res);
}

export default ReportController;