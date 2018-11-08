import express from "express";
import compression from "compression";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import logger from "./util/logger";

const app = express();

//Connect to MongoDB
/*const mongoUrl = process.env["MONGODB_URI"];
mongoose.connect(mongoUrl, {useNewUrlParser: true}).then(
    () => {
        logger.info("MongoDB connection OK");
    },
).catch(err => {
    logger.info("MongoDB connection error. Please make sure MongoDB is running. " + err);
    process.exit();
});*/

//Express configuration
app.set("port", process.env.PORT || 8081);
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('src/public'));
app.use(express.static('log'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export default app;
