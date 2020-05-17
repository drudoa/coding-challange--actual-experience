import React from "react"
import TextField from "../../components/TextField"
import Button from "../../components/Button"
import Fieldset from "../../components/Fieldset"

export default { title: "TextField" }

export const textField = () => <TextField />
export const textFieldSized = () => <TextField size={5} />
export const textFieldError = () => <TextField error />
export const textFieldDisabled = () => <TextField disabled />

export const textWithInlineButton = () => (
  <Fieldset>
    <div style={{ display: "flex" }}>
      <TextField />
      <Button style={{ marginLeft: 8 }}>submit</Button>
    </div>
  </Fieldset>
)
