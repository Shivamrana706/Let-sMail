import express from "express";
import { saveSentEmail } from "../controller/email_controler.js";

const routes = express.Router();

routes.post('/save', saveSentEmail);


export default routes;