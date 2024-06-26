import express from 'express';
import routes from './routes/index.js';

const app = express();
app.use(express.json());
routes(app);

setInterval(() => {
    if (unleash.isEnabled('eventos')) {
        console.log('Event Enabled')
    } else {
        console.log('Event disabled')
    }
}, 1000);

export default app;
