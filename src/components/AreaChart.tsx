import React from "react";
import { AreaClosed } from "@vx/shape";
import { Group } from "@vx/group";
import { appleStock } from "@vx/mock-data";
import { scaleTime, scaleLinear } from "@vx/scale";
import { extent, max } from "d3-array";
import { AppleStock } from "@vx/mock-data/lib/mocks/appleStock";

//this data is an array of JSON objects with date timestamps and close dollar values for Apple stock
const data: AppleStock[] = appleStock;

//width and height of the graph
const width = 750;
const height = 400;

//defining bounds and margins for the graph
const margin = {
    top: 60,
    bottom: 60,
    left: 80,
    right: 80
};
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

//functions that define what we mean by "x" and "y"
const x = (d: any) => new Date(d.date); //d.date is unix timestamps
const y = (d: any) => d.close;

//scaleTime scales x values, scaleLinear scales y values
const xScale = scaleTime({
    range: [0, xMax],
    domain: extent(data, x) as any
});

const yScale = scaleLinear({
    range: [yMax, 0],
    domain: [0, max(data, y) + yMax / 3],
    nice: true
});

//vx renders elements inside of an svg element, so we're creating one
export const AreaChart: React.SFC = () => {
    return (
        <svg width={width} height={height}>
            <Group top={margin.top} left={margin.left}>
                <AreaClosed
                    data={data}
                    yScale={yScale}
                    x={d => xScale(x(d))}
                    y={d => yScale(y(d))}
                    fill={"red"}
                />
            </Group>
        </svg>
    );
};
