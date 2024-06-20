import { useState } from 'react'
import { ChartContainer } from './ChartContainer'
import { searchData } from '../api';
import { CardContainer } from './CardContainer';
import { Filters } from './Filters';
import * as Tabs from '@radix-ui/react-tabs';
import { Button } from '@radix-ui/themes/dist/cjs/index.js';

export const Dashboard = ({ data, setData }) => {
    const [limit, setLimit] = useState(5)
    const limitedData = data.slice(0, limit);


    // state to store the search bar text
    const [search, setSearch] = useState("");

    // function to make an api call to get the filtered data

    const handleSearchResult = async (e) => {
        e.preventDefault();
        try {
            const response = await searchData(search)
            setData(response.data.data);
            setSearch("");
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <div >
            <div>
                <Tabs.Root className='my-5 mx-5' defaultValue="tab1" orientation="vertical">
                    <Tabs.List className=' flex justify-center gap-24' aria-label="tabs">
                        <Tabs.Trigger value="tab1">
                            <div className='flex justify-center justify-items-center py-2 font-bold rounded-md text-white px-8 bg-slate-600 '>Data</div></Tabs.Trigger>
                        <Tabs.Trigger value="tab2">
                            <div className='flex justify-center justify-items-center py-2 rounded-md font-bold text-white px-8 bg-slate-600 ' >Chart</div></Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="tab1">
                        <form className='flex  justify-center justify-items-center gap-4 py-2 rounded-md' onSubmit={handleSearchResult}>
                            <input className='' type=" search"
                                placeholder="Search by Sector Name, Topic, Title, Pestle, Source, Insight, URL..."
                                aria-label="Search"
                                onChange={(e) => setSearch(e.target.value)} />
                            <button className='bg-blue-600 text-white font-bold py-2 px-4 rounded-md' type="submit">Search</button>
                        </form>

                        <Filters setData={setData} />

                        {limitedData && limitedData.length === 0 ? (
                            <div>No data found, or please wait for a while.</div>
                        ) : limitedData && limitedData.length > 0 ? (
                            <div >
                                {limitedData.map((e, i) => {
                                    return <CardContainer item={e} key={i} />
                                })}
                            </div>
                        ) : (
                            <div>Loading...</div>
                        )}
                        <Button variant="primary" onClick={() => setLimit(prev => prev + 5)}>Show More</Button>
                    </Tabs.Content>
                    <Tabs.Content value="tab2">
                        <form className=' flex justify-center justify-items-center gap-4 py-2 rounded-md' onSubmit={handleSearchResult}>
                            <input
                                type="search"
                                placeholder="Search by Sector Name, Topic, Title, Pestle, Source, Insight, URL..."
                                aria-label="Search"
                                onChange={(e) => setSearch(e.target.value)} />
                            <button className='bg-blue-600 text-white font-bold py-2 px-4 rounded-md' type="submit">Search</button>
                        </form>
                        <Filters setData={setData} />
                        <ChartContainer data={data} />
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </div >
    )
}
