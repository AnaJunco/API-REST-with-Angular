const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    info: {
      title: 'API',
      version: '1.0.0',
      description: 'API documentation'
    }
  },
  apis: ['./routes/*.js'] // Ruta a los archivos donde tienes las rutas de tu API
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
