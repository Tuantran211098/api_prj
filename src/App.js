import React, { Component } from 'react';
import './App.css';
import Menu from './common/Menu';
import {
    BrowserRouter as Router
    , Switch
    , Route
    , Link
} from "react-router-dom";
import Routes from './routes';
class App extends Component {
    render( ) {
        return (
            <Router>
                <Menu/>
                
                <div class="container">
                        <Switch>
                          {this.showRoutes(Routes)}
                        </Switch>  
                </div>
                
            </Router>
        )
    }
    showRoutes = ( Routes ) => {
        var result = null;
        if ( Routes.length > 0 ) {
            result = Routes.map( ( Routes, index ) => {
                return (
                    <Route key={index} path={Routes.path} exact={Routes.exact} component={Routes.main}/>
                )
            } )
        }
        return result;
    }
}

export default App;
