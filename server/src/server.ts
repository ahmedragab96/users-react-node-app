import express from 'express';
import bodyParser from 'body-parser';
import {
  Router as api,
} from "./api/index";
import cors from 'cors';

// Create a new express app instance
const app: express.Application = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1", api);

//The 404 Route
app.get('*', function(req, res){
  res.status(404).send('Not Found');
});

app.listen(8080, function () {
  console.log('App is listening on port 8080!');
});