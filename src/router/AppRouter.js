import React from 'react'

import { Routes, Route } from "react-router-dom";
import { LoginPage } from '../auth/pages';
import { HomeRoutes } from '../home';


export const AppRouter = () => {
    return (
        <>

            <Routes>

                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<HomeRoutes />} />

            </Routes>
        </>
    )
}
