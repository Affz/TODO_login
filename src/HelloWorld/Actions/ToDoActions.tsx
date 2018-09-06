export const VIEWLIST = 'VIEWLIST';
export type VIEWLIST = typeof VIEWLIST;
export const VIEWLIST_SUCCESS = 'VIEWLIST_SUCCESS';
export type VIEWLIST_SUCCESS = typeof VIEWLIST_SUCCESS;
export const VIEWLIST_FAILURE = 'VIEWLIST_FAILURE';
export type VIEWLIST_FAILURE = typeof VIEWLIST_FAILURE;

export const DELETELISTITEM = 'DELETELISTITEM';
export type DELETELISTITEM = typeof DELETELISTITEM;
export const DELETELISTITEM_SUCCESS = 'DELETELISTITEM_SUCCESS';
export type DELETELISTITEM_SUCCESS = typeof DELETELISTITEM_SUCCESS;
export const DELETELISTITEM_FAILURE = 'DELETELISTITEM_FAILURE';
export type DELETELISTITEM_FAILURE = typeof DELETELISTITEM_FAILURE;

export const SORTLIST = 'SORTLIST';
export type SORTLIST = typeof SORTLIST;
export const SORTLIST_SUCCESS = 'SORTLIST_SUCCESS';
export type SORTLIST_SUCCESS = typeof SORTLIST_SUCCESS;
export const SORTLIST_FAILURE = 'SORTLIST_FAILURE';
export type SORTLIST_FAILURE = typeof SORTLIST_FAILURE;

export const MODIFYNAMES = 'MODIFYNAMES';
export type MODIFYNAMES = typeof MODIFYNAMES;
export const MODIFYNAMES_SUCCESS = 'MODIFYNAMES_SUCCESS';
export type MODIFYNAMES_SUCCESS = typeof MODIFYNAMES_SUCCESS;
export const MODIFYNAMES_FAILURE = 'MODIFYNAMES_FAILURE';
export type MODIFYNAMES_FAILURE = typeof MODIFYNAMES_FAILURE;

// export const UPDATENAME = 'UPDATENAME';
// export type UPDATENAME = typeof UPDATENAME;
// export const UPDATENAME_SUCCESS = 'UPDATENAME_SUCCESS';
// export type UPDATENAME_SUCCESS = typeof UPDATENAME_SUCCESS;
// export const UPDATENAME_FAILURE = 'UPDATENAME_FAILURE';
// export type UPDATENAME_FAILURE = typeof UPDATENAME_FAILURE;

export interface ViewList {
    type: VIEWLIST;
    name: string;
}
export interface DeleteListItem {
    type: DELETELISTITEM;
    name: string;
}
export interface SortFullList {
    type: SORTLIST;
}
export interface ModifyNames {
    type: MODIFYNAMES;
    name: string;
    modifyname: string;
}
// export interface UpdateName {
//     type: UPDATENAME;
//     name: string;
//     updatename: string;
// }
export type ToDoActions = ViewList & DeleteListItem & SortFullList & ModifyNames;
export default class ToDoListActions {
    public static Viewlist(name: string): ViewList {
        return {
            type: VIEWLIST,
            name: name,
        };
    }
    public static DeleteListItem(name: string): DeleteListItem {
        return {
            type: DELETELISTITEM,
            name: name,
        };
    }
    public static SortFullList(): SortFullList {
        return {
            type: SORTLIST
        };
    }
    public static ModifyNames(name: string, modifyname: string): ModifyNames {
        return {
            type: MODIFYNAMES,
            name: name,
            modifyname: modifyname
        };
    }
    // public static UpdateName(name: string, updatename: string): UpdateName {
    //     return {
    //         type: UPDATENAME,
    //         name: name,
    //         updatename: updatename,
    //     };
    // }
}
