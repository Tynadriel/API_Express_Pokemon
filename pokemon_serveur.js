const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const port = 8080;

const pokedexRouter = require('./routes/pokedex');
const wildRouter = require('./routes/wild');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '/pages/main_page.html'));
  //res.send("Bonjour, bienvenue sur mon site de capture de pokemon")
})


app.use('/pokedex', pokedexRouter);
app.use('/wild', wildRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
});




app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});