import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/Notfound';
import About from './pages/About/about';
import Cart from './pages/cart/cart';
import DetailHome from './pages/DetailHome/DetailHome';
import React, { Component } from 'react';
const Routes = [
    {
        path: '/'
        , exact: true
        , main: ( ) => <Home/>
    }


    
    , {
        path: '/:id/Detail'
        , exact: false
        , main: ( { location } ) => <DetailHome location={location}/>
    }


    
    , {
        path: '/About'
        , exact: false
        , main: ( ) => <About/>
    }



    
    , {
        path: '/Cart'
        , exact: false
        , main: ( ) => <Cart/>
    }



    
    , {
        path: ''
        , exact: false
        , main: ( ) => <NotFound/>
    }
  ]
export default Routes;
