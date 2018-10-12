import React, { Component } from 'react';
import Aux from 'react-aux';

import classes from './Modal.css';

import BackDrop from '../Backdrop'

class modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show
    }

    render() {
        return (<Aux>
            <BackDrop
                show={this.props.show}
                clicked={this.props.modalClosed}/>
            <div
                className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                {this.props.children}
            </div>
        </Aux>);
    };
}

export default modal;