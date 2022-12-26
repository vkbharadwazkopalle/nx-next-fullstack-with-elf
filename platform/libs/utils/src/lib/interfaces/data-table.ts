/* eslint-disable-next-line */
export interface DataTableProps<T1, T2> {
    headers: T1[];
    data: T2[];
}

export interface DTHeaders {
    isGrouped: boolean;
    isStacked: boolean;
    isVisible: boolean;
    name: string;
    isSortable: string;
}