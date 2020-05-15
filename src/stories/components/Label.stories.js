import React from "react"
import Label from "../../components/Label"
import TextField from "../../components/TextField"
import Fieldset from "../../components/Fieldset"

export default { title: "Input label" }

export const label = () => <Label>Form label</Label>

export const LabelWithInput = () => (
  <Fieldset>
    <Label for="name">Name:</Label>
    <TextField name="name" />
  </Fieldset>
)
