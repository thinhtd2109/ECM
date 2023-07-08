import { Inject, Service } from "typedi";
import Database from "../../config/database";
import 'reflect-metadata';

@Service()
export class UserGateway {
    databaseService: Database;
    constructor(@Inject() databaseService: Database) {
        this.databaseService = databaseService;
    }
    async getUserById(userId: string) {
        return {
            id: userId,
            name: 'John Doe',
            age: 16
        }
    }
}

