import express from "express";
import { saveSentEmail, getEmailsFromType, moveEmailsToBin, deleteEmails, starToggle } from "../controller/email_controler.js";

const routes = express.Router();

routes.post('/save', saveSentEmail);
routes.get('/emails/:type', getEmailsFromType);
routes.post('/bin', moveEmailsToBin);
routes.post('/delete', deleteEmails);
routes.post('/star', starToggle);


export default routes;