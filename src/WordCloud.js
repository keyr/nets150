import React, { useEffect } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";
import colors from "nice-color-palettes";

const WordCloud = ({ words }) => {
  const dimensions = {
    width: 1800,
    height: 800,
    margin: {
      top: 20,
      bottom: 20,
      right: 20,
      left: 20,
    },
  };
  dimensions.boundedWidth =
    dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.boundedHeight =
    dimensions.height - dimensions.margin.top - dimensions.margin.bottom;
  const generateCloud = () => {
    console.log("starting");
    if (!words) {
      return;
    }
    console.log("actually starting");
    cloud()
      .size([dimensions.boundedWidth, dimensions.boundedHeight])
      .words(words)
      .padding(5)
      .rotate((d) => Math.round(Math.random() * 2 * 90))
      .font("Impact")
      .fontSize((d) => d.size)
      .on("end", drawCloud)
      .start();
  };
  const clearCloud = () => {
    const svg = d3.select("#wordcloud");
    svg.selectAll("*").remove();
  };
  const drawCloud = () => {
    const palette = colors[Math.floor(Math.random() * colors.length)];
    const svg = d3
      .select("#wordcloud")
      .append("svg")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
      .append("g")
      .attr("width", dimensions.boundedWidth)
      .attr("height", dimensions.boundedHeight)
      .attr(
        "transform",
        `translate(${dimensions.margin.left}, ${dimensions.margin.top})`
      );
    svg
      .selectAll("text")
      .data(words)
      .enter()
      .append("text")
      .style("font-size", (d) => `${d.size}px`)
      .text((d) => d.text)
      .style("fill", () => palette[Math.floor(Math.random() * palette.length)])
      .attr(
        "transform",
        (d) =>
          `translate(${Math.abs(d.x)}, ${Math.abs(d.y)})rotate(${d.rotate})`
      );
  };
  useEffect(() => {
    clearCloud();
    generateCloud();
  }, [words]);
  return (
    <div
      id="wordcloud"
      style={{
        "margin-top": "100px",
        display: "flex",
        "align-content": "center",
        width: "100vw",
      }}
    />
  );
};

export default WordCloud;
