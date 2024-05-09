import express from 'express';
import cors from 'cors';
import RoutesAuth from './routes/auth.routes.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
import RoutesClients from './routes/client.routes.js';
import RoutesOffert from './routes/offert.routes.js';
import RoutesUser from './routes/user.routes.js';
import RoutesTeam from './routes/team.routes.js';
import RoutesSuper_Admin from './routes/super_admin.routes.js';

const app = express();
const port = process.env.PORT ?? 4110;

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// Routes
app.use("/auth", RoutesAuth)
app.use("/client", RoutesClients)
app.use("/offert", RoutesOffert)
app.use("/user", RoutesUser)
app.use("/team", RoutesTeam)
app.use("/super_admin", RoutesSuper_Admin)

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`🔉Server is running on port ${port}`);
})

export default app