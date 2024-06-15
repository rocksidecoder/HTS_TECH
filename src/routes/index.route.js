import { Router } from "express";
const IndexRouter = Router();

import AuthRouter from './auth.route.js';

// Auth routes
IndexRouter.use('/auth', AuthRouter)

export default IndexRouter;
