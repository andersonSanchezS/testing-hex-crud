// Environment variables
import * as dotenv from 'dotenv';
dotenv.config();

// Express Imports
import express from 'express';
import { join } from 'path';
import helmet from 'helmet';
import cors from 'cors';
import 'module-alias/register';

// Custom Imports
import { sequelize } from '@dataSources/lib/sequelize/db';
import { REST_PORT, API_VERSION } from './env';

// Database Connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err.message);
    });

// Rest Api Routes
import router from '@rest/index';

// Errors
import ErrorHandler from '@utils/ErrorHandler';
import HttpException from '@errors/HttpException';

// Express middlewares
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(helmet());

// Api routes
app.use('/', express.static(join(__dirname, '../public')));
app.use(`/api/v${API_VERSION()}`, router);

// Handle unknown routes
app.all('*', (req, res, next) => {
    next(
        new HttpException(
            `no se encuentra la ruta ${req.originalUrl} en el servidor`,
            404,
        ),
    );
});

// Error handler
app.use(ErrorHandler);

// eslint-disable-next-line no-console
app.listen(REST_PORT(), () => {
    console.log(`Rest server started at port ${REST_PORT()}`);
});
