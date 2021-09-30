import * as http from 'http';
import * as express from 'express';
import * as helmet from 'helmet';
import { once } from 'events';
import { errorMiddleware } from '../utils/error';
import appRouter from './router'
import * as cors from 'cors';

class Server {
    private app: express.Application;
    private http: http.Server;
    private port: number;

    constructor(port: number) {
        this.app = Server.createExpressApp();
        this.port = port;
    }

    static createExpressApp() {
        const app = express();

        app.use(cors())
        app.use(helmet());
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        app.use('/api', appRouter);

        app.use(errorMiddleware);



        return app;
    }

    async start() {
        this.http = this.app.listen(this.port);
        await once(this.http, 'listening');
    }
}

export default Server;
