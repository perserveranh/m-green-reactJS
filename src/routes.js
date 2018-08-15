import React from 'react';
import NotFound from './components/NotFound/index';
import { Mgreen,Promotions,PromotionInfo,Endow, Project,MyGift, Partner, New, Home, Volunteer, CollectorMgreen, Sponsor, RegisterMgreen, CollectionProcess } from './containers';

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
        path: '/detail/:id',
        exact: false,
        main: ({match}) => <PromotionInfo match={match} />
    },
    {
        path: '/promotions/:category',
        exact: false,
        main: () => <Promotions />
    },
    {
        path: '/endow',
        exact: false,
        main: ({match}) => <Endow match={match} />
    },
    {
        path: '/mygift',
        exact: false,
        main: () => <MyGift />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];
export default routes;