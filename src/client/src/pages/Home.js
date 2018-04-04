import React, {Component} from 'react';
import {Header} from 'semantic-ui-react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <br /><Header as='h1'>Welcome to Express + React Kit!</Header>
                <p>
                    Please look at the top menu to proceed examples.
                </p>
            </div>
        );
    }
}