import { Application } from "express";
import Container from "./Container";
import express from 'express';
import Database from "./database/database";
import Router from "./router";
import Registrar from "./register/register";

class App {
    private app: Application;
    private container: Container;

    constructor() {
        this.app = express();
        this.container = new Container();
        this.registerDependencies();
        this.configureRoutes();
        this.startServer();
    }

    private registerDatabase(): void {
        const database = new Database();
        this.container.register(Database, database);
    }

    private registerGateways(): void {
        const registrar = new Registrar(this.container);
        registrar.registerGateways();
    }

    private registerServices(): void {
        const registrar = new Registrar(this.container);
        registrar.registerServices()
    }

    private registerControllers(): void {
        const registrar = new Registrar(this.container);
        registrar.registerControllers();
    }

    private configureRoutes(): void {
        const router = new Router(this.container);
        this.app.use(router.getRouter());
    }

    private startServer(): void {
        const port = 3000;
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }

    private registerDependencies(): void {
        this.registerDatabase();
        this.registerGateways();
        this.registerServices();
        this.registerControllers();
    }
}

// Start the app
new App();