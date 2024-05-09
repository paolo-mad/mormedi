import ClientModel from "../model/client.model.js";

const ClientController = {

    getAllClients: async (req, res) => {
        try {
            const clients = await ClientModel.getAllClients();
            res.json(clients);
            
        }catch(error) {
            console.log(error);
        }
    },

    createClient: async (req, res) => {
        try {
            const newClient = await ClientModel.createClient(req.body);
            res.json(newClient);
            
        }catch(error) {
            console.log(error);
        }
    }
}

export default ClientController