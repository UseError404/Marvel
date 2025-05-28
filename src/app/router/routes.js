import { lazy } from "react";

export const routes = [
    {
        path: '/',
        element: lazy(() => import('../../pages/SettingsPages').then(m => ({ default: m.SettingsPages }))),
        props: {defaultHero: 'spider-man'}
    },
    {
        path: '/:heroId', // Опциональный параметр
        element: lazy(() => import('../../pages/SettingsPages').then(m => ({ default: m.SettingsPages }))),
    }
];