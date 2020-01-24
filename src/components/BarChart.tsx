import React from "react";
import { letterFrequency } from "@vx/mock-data";
import { Group } from "@vx/group";
import { Bar } from "@vx/shape";
import { scaleLinear, scaleBand } from "@vx/scale";

// We'll use some mock data from `@vx/mock-data` for this.
//const data = letterFrequency;

// Define the graph dimensions and margins
const width = 500;
const height = 500;
const margin = { top: 20, bottom: 20, left: 20, right: 20 };

// We'll make some helpers to get at the data we want
const x = (d: any) => d.letter;
const y = (d: any) => +d.frequency * 100;

interface ComponentProps {
    data: { x: number; y: number }[];
}

// Finally we'll embed it all in an SVG
export const BarGraph: React.SFC<ComponentProps> = props => {
    return (
        <svg width={width} height={height}>
            {props.data.map(point => (
                <Group key={point.x}>
                    <Bar
                        x={point.x}
                        y={point.y}
                        height={500}
                        width={10}
                        fill="#fc2e1c"
                    />
                </Group>
            ))}
        </svg>
    );
};
