import TeamModel from "./src/models/offert.model.js"




      deleteTeam = async (req, res) => {
        try {
          const id = req.params.id;
          const deleteTeam = await TeamModel.deleteTeam(req, res);
    
          res.json(deleteTeam);
        } catch (error) {
          console.log(error);
        }
      }
    ,
    createTeam= async (req, res) => {
            const {
                initial,
                stake,
                capacity,
                external,
                init_data,
                finaly_data,
                active_status,

            } = req.body;
            console.log(req.body);
            if (
                !initial || 
                !stake ||
                !capacity ||
                !external || 
                !init_data ||
                !finaly_data ||
                !active_status
            ) {
                return res 
                .status(400)
                .json({mesaje: "pleace provide all trip details"})
            }
        await TeamModel.createTeam(req, res);
    }
    
  export default TeamController;