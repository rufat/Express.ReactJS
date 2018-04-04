import React, {Component} from 'react';
import Header from './Header'
import Main from '../routes'

import 'semantic-ui-css/semantic.min.css';

export default class App extends Component {
    componentDidMount() {
        console.log('Main component mounted.')
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Main />
            </div>
        );
    }
}