export class BaseUuidDto {
    id?: string;
    created?: string;
    updated?: string;
    deleted?: boolean;
    deleted_by?: string;
    updated_by?: string;
    created_by?: string;
}

export class FilterOptions {
    columnName: string;
    value: any;
    operator?: string;
}
