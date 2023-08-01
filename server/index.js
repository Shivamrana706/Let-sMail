import express from "express";
import database from "./database/database.js";
import routes from "./routes/routes.js";
import cors from 'cors';

const app = express();

const PORT = 8000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use('/', routes);

database();

app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));

