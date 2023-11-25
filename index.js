import express from 'express'
import bodyParser from 'body-parser'
import dbConnect from './config/db.js'
import router from './routes/index.js'

export const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
dbConnect()
app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin","http://localhost:5174");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Content-Type", "application/json")
  next();
});

app.use("/", router)

const portNumber = process.env.PORT_NUMBER
app.listen(8081, () => {
  console.log('listening to port 8080')
})
