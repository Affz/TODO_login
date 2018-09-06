import * as React from 'react';
import { Link } from 'react-router-dom';
import { History } from 'history';
export interface Props {
    email: string;
    password: string;
    history: History;
}
export interface State {
    email: string;
    password: string;
    message: string;
}
export default class Login extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            message: ''
        };
    }
    CheckDetails() {
        var email = 'afrin@riverus.in';
        var password = 'test';
        if (this.state.email === email && this.state.password === password) {
            this.props.history.push('/');
        } else {
            this.setState({ message: 'Access denied' });
            return;
        }
    }
    render() {

        return (
            <div className="container-fluid" style={{ marginTop: '50px' }} >
                <div className="row">
                    <div className="col-md-6" style={{ borderRight: 'groove 1px', textAlign: 'center' }}>
                        <h1>Signup</h1>
                        <div className="card" style={{ marginTop: '100px', boxShadow: '2px 4px 37px 3px  #ccc' }}>
                            <div className="card-body" style={{ textAlign: 'center' }}> Coming Soon
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card" style={{ marginTop: '100px', boxShadow: '2px 4px 37px 3px  #ccc' }}>
                            <div className="card-body" style={{ textAlign: 'center' }}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1>Login</h1>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="email" name="email" placeholder="Enter Email" style={{ borderRadius: '4px', marginTop: '20px', }} onChange={(e) => this.setState({ email: e.currentTarget.value })} />

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="password" name="password" placeholder="Enter Password" style={{ borderRadius: '4px', marginTop: '20px' }} onChange={(e) => this.setState({ password: e.currentTarget.value })} />

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <button className="btn btn-primary" style={{ marginTop: '20px' }} onClick={() => this.CheckDetails()}>
                                            Submit
                                        </button>

                                    </div>
                                </div>
                                {this.state.message.length > 0 && <div className="row">
                                    <div className="col-md-12">
                                        {this.state.message}
                                    </div>
                                </div>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}