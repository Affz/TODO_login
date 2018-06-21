import * as React from 'react';

export interface Props {

}
export interface State {

}

export default class HelloWorld extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return(
            <div>
                Hello Bitches!!
            </div>
        );
    }
}