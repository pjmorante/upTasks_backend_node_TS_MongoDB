import server from './server';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 4001;

server.listen(port, () => {
  console.log(`REST API funcionando en el puerto ${port}`);
})