import React, { Component }  from 'react';
import ReactDOM from 'react-dom';

import Counter from './counter';
import Display from './display';
import './../../style/style.css';

class Count extends Component {
    constructor(props) {
        super(props);
        this.counterMinus = this.counterMinus.bind(this);
        this.counterAdd = this.counterAdd.bind(this);
        this.state = { count: 0 };
    }
    counterAdd() {
        this.setState({
            count: this.state.count + 1,
        });
    }
    counterMinus() {
        this.setState({
            count: this.state.count - 1,
        });
    }
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <Counter
                    didAdd={this.counterAdd}
                    didMinus={this.counterMinus}
                />
                <Display
                    num={this.state.count}
                />
            </div>
        );
    }
}
export default Count;