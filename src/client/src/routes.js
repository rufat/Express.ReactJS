import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import HTTP from './pages/HTTP'
import Socket from './pages/Socket'
import Semantic from './pages/Semantic'

export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/HTTP' component={HTTP}/>
                    <Route path='/socket' component={Socket}/>
                    <Route path='/semantic' component={Semantic}/>
                    <Route component={() => '404 Not Found'} />
                </Switch>
            </main>
        );
    }
}
