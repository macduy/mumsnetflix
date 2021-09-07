import { App } from "app"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { MumsnetScraper } from "scrapers/mumsnet/mumsnet"

function main() {
    const app = React.createElement(App)
    ReactDOM.render(app, document.getElementById("app"))

    const scraper = new MumsnetScraper()
    scraper.scrape()

    // const sentiment = new Sentiment()
    // const result = sentiment.analyze('Cats are stupid.')
    // console.log(result)
}

// Bind to on Ready
function ready(fn: () => void) {
    if (document.readyState != 'loading'){
      fn()
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(main)