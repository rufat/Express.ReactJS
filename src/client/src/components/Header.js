import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class Header extends Component {
    state = {};
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render() {
        const { activeItem } = this.state;
        return (
            <Menu inverted attached>
                <Menu.Item header>Express + React</Menu.Item>
                <Menu.Item as={Link} to='/' name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
                <Menu.Item as={Link} to='/HTTP' name='HTTP' active={activeItem === 'HTTP'} onClick={this.handleItemClick} />
                <Menu.Item as={Link} to='/socket' name='Socket' active={activeItem === 'Socket'} onClick={this.handleItemClick} />
                <Menu.Item as={Link} to='/semantic' name='Semantic' active={activeItem === 'Semantic'} onClick={this.handleItemClick} />
            </Menu>
        )
    }
}