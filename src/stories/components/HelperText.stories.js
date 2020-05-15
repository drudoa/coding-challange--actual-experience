import React from "react"
import HelperText from "../../components/HelperText"
import Fieldset from "../../components/Fieldset"
import TextField from "../../components/TextField"

export default { title: "Helper Text" }

export const helperText = () => <HelperText>helper text</HelperText>
export const helperTextError = () => (
  <HelperText color="red">some error</HelperText>
)
export const helperTextErrorWithTextField = () => (
  <Fieldset>
    <TextField error value="text with some error" />
    <HelperText color="red">Some Error</HelperText>
  </Fieldset>
)
