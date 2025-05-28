import {Route, Routes} from "react-router";
import {routes} from "./routes.js";
import {Suspense} from "react";

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