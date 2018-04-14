import React, {Component} from 'react';
import {Button, List, Image} from 'semantic-ui-react';

export default class HTTP extends Component {
    constructor() {
        super();
        this.state = {
            usersList: ''
        };
    }

    callAPI_btn = async(e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/ping');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        this.setState({usersList: this.iterateUsers(body.users)});
    };

    iterateUsers = (users) => {
        return users.map(u => {
            return <List.Item key={u.name}>
                <Image avatar src={'/users/' + u.name + '.png'} />
                <List.Content>
                    <List.Header as='a'>{u.name}</List.Header>
                    <List.Description>Score: {u.score}XP</List.Description>
                </List.Content>
            </List.Item>
        });
    };

    render() {
        return (
            <div>
                <br /><h1>HTTP Request Example</h1><br />
                <Button size="massive" color='green' onClick={this.callAPI_btn}>Call API</Button><br /><br />
                <List>{this.state.usersList}</List>
            </div>
        );
    }
}