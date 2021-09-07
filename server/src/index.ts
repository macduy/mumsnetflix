import express from "express"
import { MumsnetScraper } from "./scrapers/mumsnet/mumsnet"


const app = express()

app.get('/', (req: any, res: any) => {
    const scraper = new MumsnetScraper()
    scraper.scrape()
})


app.listen(3000, () => {
    console.log("Listening on port 3000")
})
