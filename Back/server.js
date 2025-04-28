const express = require('express');
const cors = require('cors');

const routes = require('./src/routes/routes').default; 

const app = express();
const PORT = 4001;

app.use(cors());
app.use(express.json());

app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Servidor backend corriendo en el puerto 4001');
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
