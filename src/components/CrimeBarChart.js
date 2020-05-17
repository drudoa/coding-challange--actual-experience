// ref: https://recharts.org/

import React from "react"
import PropTypes from "prop-types"
import {
  BarChart,
  Bar,
  Label,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { groupBy } from "lodash"

const CrimeBarChart = ({ data, identity }) => {
  // if identity provided group data by identity
  const groupedData = identity ? groupBy(data, identity) : data

  // format data for chart
  const charData = Object.keys(groupedData).map((groupName) => {
    return { name: groupName, count: groupedData[groupName].length }
  })

  /*eslint-disable */
  const CustomizedAxisTick = (props) => {
    const { x, y, payload } = props

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    )
  }
  /*eslint-disable */

  return (
    <ResponsiveContainer width={"100%"} height={420}>
      <BarChart
        data={charData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis
          dataKey="name"
          height={120}
          tick={CustomizedAxisTick}
          interval={0}
        >
          <Label value="Crime Category" position="bottom" offset={-10} />
        </XAxis>
        <YAxis>
          <Label value="No. of Crimes" position="left" offset={0} angle={-90} />
        </YAxis>
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}

CrimeBarChart.propTypes = {
  data: PropTypes.array,
  identity: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export default CrimeBarChart
