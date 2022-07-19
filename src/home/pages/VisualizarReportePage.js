import React from 'react'
import { HeroesList } from '../components/HeroesList'

export const VisualizarReportePage = () => {
  return (
    <>
    <h1>Visualizar Reporte</h1>
    <hr />

    <HeroesList 
        publisher={'Marvel Comics'}
        />
    </>
    )
}
