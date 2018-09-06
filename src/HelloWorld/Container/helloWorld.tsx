import { connect } from 'react-redux';
import HelloWorld from '../../HelloWorld/Components/helloWorld';
import ToDoListActions from '../../HelloWorld/Actions/ToDoActions';
export function mapStateToProps(appState: any) {
  return {
    list: appState.HelloWorld.list
  };
}

export function mapDispatchToProps(dispatch: any) {
  return {
    ViewList: (name: string) => dispatch(ToDoListActions.Viewlist(name)),
    DeleteList: (name: string) => dispatch(ToDoListActions.DeleteListItem(name)),
    SortList: () => dispatch(ToDoListActions.SortFullList()),
    ModifyName: (name: string, modifyname: string) => dispatch(ToDoListActions.ModifyNames(name, modifyname)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld as any);
