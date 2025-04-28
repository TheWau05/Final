const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4001; // Puerto para el backend

// Middleware
app.use(cors());
app.use(express.json());

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('Servidor backend corriendo en el puerto 4001');
});

// Aquí puedes agregar más rutas, middlewares, etc.

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
