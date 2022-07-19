import React from 'react'
import { Navbar } from '../../ui'
import { EjecutarCalculoHCPage, RegistrarMedicionPage, VincularTrabajadorPage, VisualizarReportePage } from '../pages'
import { Navigate, Route, Routes } from 'react-router-dom'

export const HomeRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className='container'>
            <Routes>
                <Route path="calculoHC" element={<EjecutarCalculoHCPage />} />
                <Route path="registrarMedicion" element={<RegistrarMedicionPage />} />
                <Route path="vincularTrabajador" element={<VincularTrabajadorPage />} />
                <Route path="visualizarReporte" element={<VisualizarReportePage />} />

                <Route path="/" element={<Navigate to='/calculo' />} />

            </Routes>
        </div>

    </>
    )
}
