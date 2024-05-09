import OffertModel from "./src/models/offert.model.js"




    deleteOffert = async (req, res) => {
        try {
          const id = req.params.id;
          const deleteOffert = await OffertModel.deleteOffert(req, res);
    
          res.json(deleteOffert);
        } catch (error) {
          console.log(error);
        }
      }
    ,
    createOffert= async (req, res) => {
            const {
                code,
                expected_date,
                place,
                importance,
                comments,
                title

            } = req.body;
            console.log(req.body);
            if (
                !code || 
                !expected_date ||
                !place ||
                !importance || 
                !comments ||
                !title 
            ) {
                return res 
                .status(400)
                .json({mesaje: "pleace provide all trip details"})
            }
        await OffertModel.createOffert(req, res);
    }
    
  export default OffertController;