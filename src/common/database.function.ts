import { Inject, Service } from "typedi";
import Database from "../../config/database";
import { FilterOptions } from "../../model/common.dto";

@Service()
export class DatabaseFunction {
    private databaseService: Database
    constructor(@Inject() databaseService: Database) {
        this.databaseService = databaseService;
    }

}