import React from 'react'

import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { HomeRoutes } from '../home';


export const AppRouter = () => {
    return (
        <>

            <Routes>
                {/* Login y registro */}
                <Route path="/auth/*" element={<AuthRoutes />} />

                {/* Huella de carbono */}
                <Route path="/*" element={<HomeRoutes />} />

            </Routes>
        </>
    )
}
