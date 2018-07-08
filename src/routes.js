import React from 'react';
import Home from './containers/home';
import Project from './containers/project';
import Donors from './containers/donors';
import New from './containers/new';
import NotFound from './components/NotFound/index';
import Mgreen from './containers/mgreen';

const routes =[
    {
        path: '/',
        exact:true,
        main : () => <Home />
    },
    {
        path: '/category/du-an/',
        exact : false,
        main :  () => <Project   />
    },
    {
        path: '/category/nha-tai-tro/',
        exact: false,
        main: () => <Donors />
    },
    {
        path: '/category/tin-tuc',
        exact: false,
        main : () => <New />
    },
    {
        path:'/mgreen',
        exact:false,
        main: () => <Mgreen />
    },
    {
        path: '',
        exact:false,
        main: () => <NotFound />
    }
];
export default routes;