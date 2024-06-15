import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Backend APIs',
            version: '1.0.0',
            description: 'Backend APIs documentation',
        },
    },
    apis: ['./src/swagger/*.js'],
    tags: [
        {
            name: "Auth"
        }
    ]
}

export const swaggerSpecs = swaggerJSDoc(swaggerOptions);
