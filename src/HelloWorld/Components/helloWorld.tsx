import * as React from 'react';
import { isNullOrUndefined } from 'util';

export interface Props {
    name: string;
    ViewList: (name: string) => void;
    DeleteList: (name: string) => void;
    ModifyName: (modifyname: string, name: string) => void;
    SortList: () => void;
    list: string[];
    // modalIsOpen:false;
    // editedname:string;
}
export interface State {
    name: string;
    list: string[];
    toggle: string;
    modifyname: string;
    // modalIsOpen:false;
    // editedname:string;
}

export default class HelloWorld extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: '',
            list: [],
            toggle: '',
            modifyname: '',
            // modalIsOpen: false,
            // editedname:'',
        };
        // this.openModal = this.openModal.bind(this);
        //  this.afterOpenModal = this.afterOpenModal.bind(this);
        // this.closeModal = this.closeModal.bind(this);
    }
    // openModal() {
    //     this.setState({modalIsOpen:true });
    //   }

    // closeModal(){
    //     this.setState({modalIsOpen:false});
    // }
    render() {

        return (
            <div>
                <input type="text" onChange={(e) => this.setState({ name: e.currentTarget.value })} />

                <button className="btn btn-warning" onClick={() => this.props.ViewList(this.state.name)} >Add items</button>
                {/* {this.props.list.map((item, i) =>
                    <div key={i} >
                        {item}
                        <button className="btn btn-primary">Update</button>
                         <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal}>
                            <div>
                                <input type="text" value={this.state.name} onChange={(e)=>this.setState({editedname:e.currentTarget.value})}/>
                            </div>
                        </Modal> 
                        <button className="btn btn-primary" onClick={() => this.props.DeleteList(this.state.name)}>Delete</button>
                    </div> 
                 )} */}
                  <button className="btn btn-primary" onClick={() => this.props.SortList()}>Sort Items</button>
         {this.props.list.map((item, i) =>
                    this.state.toggle === item ?
                        <div key={i}>
                            <input type="text" key={i} defaultValue={item} onChange={(e) => this.setState({ modifyname: e.currentTarget.value })} />
                            <button className="btn btn-primary" onClick={() => { this.props.ModifyName(this.state.modifyname, item); }}>Save</button>
                            <button className="btn btn-primary" onClick={() => this.setState({ toggle: '' })}>Cancel</button>
                        </div> :
                        <div key={i}>
                            {item}
                            <button className="btn btn-primary" onClick={() => this.props.DeleteList(this.state.name)}>Delete</button>
                            <button className="btn btn-danger" onClick={() => this.setState({ toggle: item })}>Update</button>
                        </div>
                )}
               
            </div>
        );
    }
}