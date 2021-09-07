/**
 * Example:
 * - https://www.mumsnet.com/Talk/mumsnet_classics/4094310-what-drama-have-you-witnessed-at-a-wedding
 */

const axios = require('axios').default;
import { parse, HTMLElement } from 'node-html-parser'
import { Dialogue } from "../../api";

const TEST_URL = "http://www.mumsnet.com/Talk/mumsnet_classics/4094310-what-drama-have-you-witnessed-at-a-wedding"


export class MumsnetScraper {
    async scrape() {
        const response = await axios({
            method: 'get',
            url: TEST_URL
        })

        // Assume everything is ok.

        const page = parse(response.data)

        const postsContainer = page.querySelector("#posts")
        const posts = postsContainer.querySelectorAll(".post")

        const dialogue: Dialogue = {
            lines: []
        }

        for (const post of posts) {

            dialogue.lines.push(this.extractLine(post))
        }

        console.log(dialogue)
    }

    extractLine(from: HTMLElement): Dialogue.Line {
        return {
            speaker: from.querySelector(".bar .nickname .nick").textContent.replace("\n", ""),
            text: from.querySelector(".message p").textContent,
        }
    }
}