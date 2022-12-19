import { writable, readable } from "svelte/store";
import * as d3 from "d3";
import fs from "fs";
import datapoints from "./data";

let data;
let meanData = [];
let mD;
let countries;

// load data
data = datapoints;
// data = await d3.csv("./src/data/big-mac-data.csv");

// data manipulations
data = data
  .filter((d) => d.date.substring(0, 4) >= "2012")
  .sort((a, b) => d3.descending(a.date, b.date));

mD = d3.rollups(
  data,
  (v) => d3.mean(v, (d) => d.dollar_price),
  (d) => d.date
);

for (let i = 0; i < mD.length; i++) {
  meanData.push({ date: mD[i][0], dollar_price: mD[i][1] });
}

countries = Array.from(
  new Set(
    data
      .filter((d) => d.date.substring(0, 7) >= "2021-07")
      .sort((a, b) => d3.descending(a.dollar_price, b.dollar_price))
      .map((d) => d.name)
  )
);

export const dataset = readable(data);
export const meanDataset = readable(meanData);
export const countrySet = readable(countries);
