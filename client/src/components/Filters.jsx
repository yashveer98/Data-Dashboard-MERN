import React from 'react'
import { getData, getYear } from '../api';
import { Button, DropdownMenu } from '@radix-ui/themes/dist/cjs/index.js';

export const Filters = ({ setData }) => {
    //function to call the getDataFromDB function and passing the 'year' to it entered by the user
    const handleSelect = (event) => {
        getDataFromDB(event.target.innerText)
    };
    // func to fetch the filtered data by year and update the state
    const getDataFromDB = async (year) => {
        try {
            const response = await getYear(year)
            setData(response.data.data)
        }
        catch (e) {
            console.log(e)
        }
    }
    // func to handle the "reset filters button" by making another api call and update state 
    const handleReset = async () => {
        try {
            const response = await getData()
            setData(response.data.data)
        }
        catch (e) {
            console.log(e)
        }

    }
    return (
        <div>
            <DropdownMenu.Root >
                <DropdownMenu.Trigger style={{ marginLeft: '1vw', width: '10rem' }}>
                    <Button variant="success" >
                        Filter By Year
                        <DropdownMenu.TriggerIcon />
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    <DropdownMenu.Item onClick={handleSelect}>2014</DropdownMenu.Item>
                    <DropdownMenu.Item onClick={handleSelect}>2015</DropdownMenu.Item>
                    <DropdownMenu.Item onClick={handleSelect}>2016</DropdownMenu.Item>
                    <DropdownMenu.Item onClick={handleSelect}>2017</DropdownMenu.Item>
                    <DropdownMenu.Item onClick={handleSelect}>2018</DropdownMenu.Item>
                    <DropdownMenu.Item onClick={handleSelect}>2019</DropdownMenu.Item>
                    <DropdownMenu.Item onClick={handleSelect}>2020</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
            <Button variant="danger" onClick={handleReset} style={{ marginLeft: '1vw', width: '10rem' }}>Reset Filters</Button>
        </div>
    )
}
