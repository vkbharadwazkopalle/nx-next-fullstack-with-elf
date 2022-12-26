import { DataTableProps, DTHeaders } from "./data-table";

export namespace Datasheets {
    
    export interface Headers extends DTHeaders {
        id: string;
    }

    export enum Status {
        ARCHIVED,
        DRAFT,
        PRIMARY,
        RELEASED
    }

    export interface Data {
        status: Status;
        name: string;
        isEditable: boolean;
        isDisabled: boolean;
    }

    export interface Grid extends DataTableProps<Headers, Data> {
        isVisible: boolean;
    }
}