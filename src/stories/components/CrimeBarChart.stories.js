import React from "react"
import CrimeBarChart from "../../components/CrimeBarChart"
import data from "../testData.json"

export default { title: "Crime Charts" }

export const barChart = () => <CrimeBarChart data={data} identity="category" />
