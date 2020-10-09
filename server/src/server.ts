import express from 'express';
import bodyParser from 'body-parser';
import {
  Router as api,
} from "./api/index";

// Create a new express app instance
const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1", api);

app.listen(8080, function () {
  console.log('App is listening on port 8080!');
});