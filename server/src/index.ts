import { Server } from './server';

const port = 8080;
const server = new Server();

server.app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
