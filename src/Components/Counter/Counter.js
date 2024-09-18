import React from 'react';

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialValue
        }
    }

    increment = () => {
        this.setState({ ...this.state, count: this.state.count + 1 });
    }

    decrement = () => {
        this.setState({ ...this.state, count: this.state.count - 1 });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                { onClick: this.increment },
                'Increment'
            ),
            React.createElement(
                'button',
                { onClick: this.decrement },
                'Decrement'
            ),
            React.createElement(
                'div',
                null,
                this.state.count
            ),
        )
    }
}