import express from 'express';
import {
  Router as api,
} from "./api/index";

// Create a new express app instance
const app: express.Application = express();

app.use("/api/v1", api);

app.listen(8080, function () {
  console.log('App is listening on port 8080!');
});