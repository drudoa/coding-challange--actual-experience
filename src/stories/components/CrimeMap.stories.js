import React from "react"
import CrimeMap from "../../components/CrimeMap"
import testData from "../testData.json"

export default { title: "Crime Map" }

export const withData = () => (
  <CrimeMap center={[51.432898, -2.005317]} data={testData} />
)

export const withoutData = () => <CrimeMap />
