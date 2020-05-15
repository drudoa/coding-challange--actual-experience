import React, { useState } from "react"
import Fieldset from "./Fieldset"
import HelperText from "./HelperText"
import TextField from "./TextField"
import Button from "./Button"
import Label from "./Label"
import validatePostcode from "../util/validatePostcode"

const PostcodeSearch = ({ value, onChange, onSubmit, isLoading }) => {
  const [dirty, setDirty] = useState(false)
  const [error, setError] = useState("")

  const validate = () => {
    setError("")

    if (!value) {
      setError("Postcode is required.")
      return
    } else if (!validatePostcode(value)) {
      setError("Postcode is invalid")
      return
    } else {
      onSubmit?.()
    }
  }

  const handleChange = (e) => {
    setError("")
    const val = e.target.value
    if (val) {
      setDirty(true)
    } else {
      setDirty(false)
    }
    onChange?.(val)
  }

  return (
    <Fieldset>
      <Label>Postcode</Label>
      <TextField error={error} value={value} onChange={handleChange} required />
      <HelperText color="red">{dirty && error}</HelperText>

      <Button
        type="submit"
        styles={{ width: "100%" }}
        onClick={validate}
        disabled={isLoading || !value || error}
      >
        Search
      </Button>
    </Fieldset>
  )
}

export default PostcodeSearch
