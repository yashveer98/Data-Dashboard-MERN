import React from 'react'
import BarChart from './charts/BarChart'
import DoughnutChart from './charts/DoughnutChart'
import * as Accordion from '@radix-ui/react-accordion';
import PolarChart from './charts/PolarChart';
import LineChart from './charts/LineChart';
import RadarChart from './charts/RadarChart';
import PieChart from './charts/PieChart';

export const ChartContainer = ({ data }) => {
    return (
        <div className='flex justify-center'>
            <Accordion.Root className='flex flex-col my-10 w-2/3 gap-4 text-center' type='single' defaultValue='item-1' collapsible>
                <Accordion.Item value='item-1'>
                    <Accordion.Trigger className='text-white h-12 w-full rounded-md bg-slate-600'> Polar Area and Doughnut Charts - represents number of countries, sectors, topics, pestles, sources, etc are involved</Accordion.Trigger>
                    <Accordion.Content>
                        <div >
                            <PolarChart serverData={data} />
                            <DoughnutChart serverData={data} />
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value='item-2'>
                    <Accordion.Trigger className='text-white h-12 w-full rounded-md bg-slate-600'> Bar Chart- represents number of projects in each sector</Accordion.Trigger>
                    <Accordion.Content>
                        <div>
                            <BarChart serverData={data} />
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value='item-3'>
                    <Accordion.Trigger className='text-white h-12 w-full rounded-md bg-slate-600'> Line Chart- represents number of projects as per pestle</Accordion.Trigger>
                    <Accordion.Content>
                        <div >
                            <LineChart serverData={data} />
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value='item-4'>
                    <Accordion.Trigger className='text-white h-12 w-full rounded-md bg-slate-600'> Radar and Pie Charts- represents number of projects as per pestle</Accordion.Trigger>
                    <Accordion.Content>
                        <div >
                            <RadarChart serverData={data} />
                            <PieChart serverData={data} />
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>
        </div>
    )
}
