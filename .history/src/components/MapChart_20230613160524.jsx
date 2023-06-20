import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-10, -10],
        scale: 800,
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#d87093"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[22.2947, 48.379433]}
        dx={-50}
        dy={-40}
        connectorProps={{
          stroke: "#FFFFFF",
          strokeWidth: 1,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFFFFF">
          {"Uzhhorod"}
        </text>
      </Annotation>
      <Annotation
        subject={[24.869182, 44.85648]}
        dx={-90}
        dy={-40}
        connectorProps={{
          stroke: "#FFFFFF",
          strokeWidth: 1,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFFFFF">
          {"Pitesti"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
