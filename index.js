import express from "express";
import database from "./database/database.js";
import routes from "./routes/routes.js";
import cors from 'cors';
import path from "path";

const __dirname = path.resolve();
const app = express();

const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use('/', routes);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get('*', function (_, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"), function (err) {
        res.status(500), send(err);
    })
})

database();

app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));

