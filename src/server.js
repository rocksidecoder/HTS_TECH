import { createServer } from "http";

import app from './app.js';
import { APP_CONFIG } from './config/index.js';


const port = APP_CONFIG.PORT
const server = createServer(app);

server.listen(port, () => console.log(`Server started on port ${port}`) )
