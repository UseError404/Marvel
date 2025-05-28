import { lazy } from "react";

export const routes = [
    {
        path: '/Marvel/',
        element: lazy(() => import('../../pages/SettingsPages').then(m => ({ default: m.SettingsPages }))),
        props: {defaultHero: 'spider-man'}
    },
    {
        path: '/Marvel/:heroId', // Опциональный параметр
        element: lazy(() => import('../../pages/SettingsPages').then(m => ({ default: m.SettingsPages }))),
    }
];