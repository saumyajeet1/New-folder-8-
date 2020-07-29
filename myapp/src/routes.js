import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Layout from './hoc';
import Error from './components/404'
import Main from './components/main.js'
import Team from './components/team';
import GalleryDis from './components/gallerydis';
import Details from './components/details';
import galleryentry from './components/galleryentry';
import  Gallery  from './components/galleryentry';
const Routes = () => {
    return (
        <Layout>
        <Switch>
            
        <Route component={Main} exact path="/"/> 
           
        <Route component={Team} exact path="/o"/>
        <Route component={GalleryDis} exact path="/g"/>
        <Route component={Details} exact  path="/events"/>
        <Route component={Gallery} exact  path="/entryg"/>
        
            <Route component={Error} /> 

        
        </Switch>
        </Layout>
    );
};

export default Routes;