import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Layout from './hoc';
import Error from './components/404'
import Main from './components/main.js'
import Team from './components/team';
const Routes = () => {
    return (
        <Layout>
        <Switch>
            
        <Route component={Main} path="/o"/> 
           
        <Route component={Team} path="/"/>
            <Route component={Error} /> 

        
        </Switch>
        </Layout>
    );
};

export default Routes;