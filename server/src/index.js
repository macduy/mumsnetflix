"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mumsnet_1 = require("./scrapers/mumsnet/mumsnet");
var app = (0, express_1["default"])();
app.get('/', function (req, res) {
    var scraper = new mumsnet_1.MumsnetScraper();
    scraper.scrape();
});
app.listen(3000, function () {
    console.log("Listening on port 3000");
});
