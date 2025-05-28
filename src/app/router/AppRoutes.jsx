import {Route, Routes} from "react-router";
import {routes} from "./routes.js";
import {Suspense, useEffect, useState} from "react";
import {Loading} from "../../shared/ui/indes.jsx";

export const AppRoutes = () => {
    return (
        <Suspense fallback={<div></div>}>
                <Routes>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.element {...route.props} />}
                        />
                    ))}
                </Routes>
        </Suspense>
    );
};