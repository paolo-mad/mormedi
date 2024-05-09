import  Routes  from "express";
import ReportController from "../controllers/report.controller.js";

const RoutesReport = Routes();

RoutesReport.route('/reports').get(ReportController.getAllReports)
RoutesReport.route('/reports').post(ReportController.createReports)
RoutesReport.route('/reports').get(ReportController.getReportrs)
RoutesReport.route('/reports/:id').delete(ReportController.deleteReport)
RoutesReport.route('/reports').put(ReportController.updateReports)



export default RoutesReport;