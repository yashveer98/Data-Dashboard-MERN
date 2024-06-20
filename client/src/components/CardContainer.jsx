import { Card, Text } from '@radix-ui/themes/dist/cjs/index.js'
import React from 'react'

export const CardContainer = ({ item }) => {
    return (
        <div className='flex justify-center '>
            <Card className='flex bg-slate-100 w-2/3 my-4' variant='surface'>
                <div className='bg-slate-600 pb-2 rounded-md text-white'>
                    <h1 className='text-center text-xl font-bold'>
                        Project Details
                    </h1>
                    <h2 className='text-center text-lg font-semibold'>{item.sector ? item.sector : "Sector"}</h2>
                </div>
                <div className='flex-column my-10'>
                    <ul className=''>
                        <li> {item.topic ? item.topic : "No Info"} </li>
                        <li> {item.title ? item.title : "No Info"} </li>
                        <li> {item.insight ? item.insight : "No Info"} </li>
                        <li> {item.url ? item.url : "No Info"} </li>
                        <li> {item.region ? item.region : "No Info"} </li>
                        <li> {item.country ? item.country : "No Info"} </li>
                        <li> {item.source ? item.source : "No Info"} </li>
                        <li> {item.pestle ? item.pestle : "No Info"} </li>
                        <li> {item.start_year ? item.start_year : "No Info"} </li>
                        <li> {item.end_year ? item.end_year : "No Info"} </li>
                        <li> {item.added ? item.added : "No Info"} </li>
                        <li> {item.published ? item.published : "No Info"} </li>
                        <li> {item.intensity ? item.intensity : "No Info"} </li>
                        <li> {item.likelihood ? item.likelihood : "No Info"} </li>
                    </ul>
                </div>

            </Card>
        </div>
    )
}
