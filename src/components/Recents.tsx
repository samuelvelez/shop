import React from 'react'
import { Producto } from '../interfaces/Product'
import { Recent } from './Recent'

export const Recents = () => {
    const recentList: Producto[] = [
        {
            Categoria: "Seguridad y Automatización",
            Subcategoria: "Iluminación",
            Nombre: "Nexxt Solutions Connectivity - 1000 Lumen - 10W",
            Marca: "Nexxt Solutions Connectivity",
            Precio: 3.59,
            Disponibilidad: "Inventario su localidad: más de 20",
            Parte: "NHB-C410",
            Sku: "NHB-C410",
            Atributos: "Conexión Wi-Fi-Bombillo de luz blanca-Compatible con Amazon Alexa y Google Assistant-400 lumen-4W(equivalente a 40w)-110V /220V",
            Imagen: "https://placehold.co/100x100/000000/FFFFFF/png"
        },
        {
            Categoria: "Seguridad y Automatización",
            Subcategoria: "Iluminación",
            Nombre: "Nexxt Solutions Connectivity - 1000 Lumen - 10W",
            Marca: "Nexxt Solutions Connectivity",
            Precio: 3.60,
            Disponibilidad: "Inventario su localidad: más de 20",
            Parte: "NHB-C410",
            Sku: "NHB-C410",
            Atributos: "Conexión Wi-Fi-Bombillo de luz blanca-Compatible con Amazon Alexa y Google Assistant-400 lumen-4W(equivalente a 40w)-110V /220V",
            Imagen: "https://placehold.co/100x100/000000/CCCCCC/png"
        }
    ]
    return (
        <div className=''>
            {recentList.map(recentItem => (
                <Recent
                    key={recentItem.Sku}
                    item={recentItem}
                />
            ))}
        </div>
    )
}
