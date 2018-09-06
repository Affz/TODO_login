import * as constants from '../Actions/ToDoActions';
import ToDoState from '../State/ToDoState';
export default function ToDoReducer(state: ToDoState = { list: [] }, action: any) {
    switch (action.type) {
        case constants.VIEWLIST: {
            var list: string[] = state.list;
            list.push(action.name);
            return { ...state, list: JSON.parse(JSON.stringify(state.list)) };
        }
        case constants.DELETELISTITEM: {
            const deletelist: string[] = state.list;
            var index = 0;
            for (var i = 0; i < deletelist.length; i++) {
                if (deletelist[i] === action.name) {
                    index = i;
                }
            }
            deletelist.splice(index, 1);
            return { ...state, list: JSON.parse(JSON.stringify(state.list)) };

        }
        case constants.SORTLIST: {
            var listforsort: string[] = state.list;
            var sortedlist: string[] = listforsort.sort();
            return { ...state, list: JSON.parse(JSON.stringify(sortedlist)) };
        }
        case constants.MODIFYNAMES: {
            var modifylist: string[] = state.list;
            for (var j = 0; j < modifylist.length; j++) {
                if (modifylist[j] === action.modifyname) {
                    modifylist[j] = action.name;
                }
            }
            return { ...state, list: JSON.parse(JSON.stringify(modifylist)) };
        }
        // case constants.UPDATENAME: {
        //     var updatelist: string[] = state.list;

        // }
        default: {
            return {
                ...state
            };
        }
    }
}