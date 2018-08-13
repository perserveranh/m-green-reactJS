import React from 'react';
import NotFound from './components/NotFound/index';
import { Mgreen,Endow, Project, Partner, New, Home, Volunteer, CollectorMgreen, Sponsor, RegisterMgreen, CollectionProcess } from './containers';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/category/du-an/',
        exact: false,
        main: () => <Project />
    },
    {
        path: '/category/nha-tai-tro/',
        exact: false,
        main: () => <Partner />
    },
    {
        path: '/category/tin-tuc',
        exact: false,
        main: () => <New />
    },
    {
        path: '/mgreen',
        exact: false,
        main: () => <Mgreen />
    },
    {
        path: '/volunteer',
        exact: false,
        main: () => <Volunteer />
    },
    {
        path: '/collectormgreen',
        exact: false,
        main: () => <CollectorMgreen />
    },
    {
        path: '/sponsor',
        exact: false,
        main: () => <Sponsor />
    },
    {
        path: '/register',
        exact: false,
        main: () => <RegisterMgreen />
    },
    {
        path: '/collection-process',
        exact: false,
        main: () => <CollectionProcess />
    },
    {
        path: '/endow',
        exact: false,
        main: () => <Endow />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];
export default routes;