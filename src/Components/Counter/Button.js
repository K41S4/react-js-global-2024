import React from 'react';

export class Button extends React.Component {
    render() {
        return React.createElement(
            'button',
            { onClick: this.props.eventHandler, style: this.props.style },
            this.props.name 
        );
    }
}