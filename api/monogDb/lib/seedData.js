
import { jsonData } from "./jsondata.js"
import { article } from "../modals/article.js"

export const seedData = async () => {
    try {
        await article.insertMany(jsonData)
    }
    catch (error) {
        console.log(error)
    }


}