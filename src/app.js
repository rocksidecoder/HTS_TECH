import express from "express";
import Indexrouter from "./routes/index.route.js";

// Intialize app
const app = express();

import  swaggerUi from 'swagger-ui-express';
import { swaggerSpecs } from "./swagger/index.js";

// setup body parser
app.use(express.json())

// swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Importing all routes
app.use('/api/v1', Indexrouter)

// Error Handling
app.use('*', (req, res) => {
    return res.json({
        status: 404,
        message: "Route not found"
    })
})

app.use((err, req, res, next) => {
    let statusCode = err.status || 500;

    const errorRes = {
        status: "error",
        errors: {
            message: err.message || "Something went wrong !!",
        }
    }

    if(err.name === "ValidationError"){
        let errors = err.details?.body || err.details?.query || err.details?.params 

        statusCode = 422;
        errorRes.errors.message = errors.map(e => e.message)
    }


    return res.status(statusCode).json(errorRes)
})

export default app