import React from 'react'
import { HeroesList } from '../components/HeroesList'

export const VisualizarReportePage = () => {
  return (
    <>
    <h1>Marvel</h1>
    <hr />

    <HeroesList 
        publisher={'Marvel Comics'}
        />
    </>
    )
}
