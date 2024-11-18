import server from './server';

const port = process.env.PORT || 4001;

server.listen(port, () => {
  console.log(`REST API funcionando en el puerto ${port}`);
})