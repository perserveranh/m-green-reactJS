import React from 'react';
import Home from './containers/home';
import Project from './containers/project';
import Partner from './containers/partner';
import New from './containers/new';
import NotFound from './components/NotFound/index';
const routes =[
    {
        path: '/',
        exact:true,
        main : () => <Home />
    },
    {
        path: '/project',
        exact : false,
        main :  () => <Project />
    },
    {
        path: '/partner',
        exact: false,
        main: () => <Partner />
    },
    {
        path: '/new',
        exact: false,
        main : () => <New />
    },
    {
        path: '',
        exact:false,
        main: () => <NotFound />
    }
];
export default routes;