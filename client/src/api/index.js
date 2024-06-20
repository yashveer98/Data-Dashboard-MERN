import axios from 'axios';
export const getData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/filter/all')
        if (!response) throw Error
        return response
    }
    catch (error) {
        console.log(error)
    }

}
export const searchData = async (search) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/filter/any/${search}`)
        if (!response) throw Error
        return response
    } catch (error) {
        console.log(error)
    }
}
export const getYear = async (year) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/filter/year/${year}`)
        if (!response) throw Error
        return response
    } catch (error) {
        console.log(error)
    }
}
