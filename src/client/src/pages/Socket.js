import React, {Component} from 'react';
import socketIOClient from 'socket.io-client'
import {Menu, Dropdown} from 'semantic-ui-react';

export default class Socket extends Component {
    constructor() {
        super();
        this.socket = socketIOClient(":5000/");
    }

    send = (key, value) => {
        this.socket.emit(key, value);
    };

    render() {
        this.socket.on('color', (color) => {
            document.body.style.backgroundColor = color
        });
        const options = [
            { key: 1, text: 'Default', value: '#fff' },
            { key: 2, text: 'Blue', value: '#1976d2' },
            { key: 3, text: 'Red', value: '#d8453a' },
            { key: 4, text: 'Green', value: '#388e3c' },
        ];
        return (
            <div>
                <br /><h1>Socket Example</h1><br />
                <Menu compact>
                    <Dropdown onChange={(e, d) => this.send('color', d.value)} text='Background color' options={options} simple item />
                </Menu>
            </div>
        );
    }
}