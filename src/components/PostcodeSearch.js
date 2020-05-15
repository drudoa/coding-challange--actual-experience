import React, { useState, useEffect } from "react"
import Fieldset from "./Fieldset"
import HelperText from "./HelperText"
import TextField from "./TextField"
import Button from "./Button"
import Label from "./Label"
import Overlay from "./Overlay"
import validatePostcode from "../util/validatePostcode"
import { DotLoader } from "react-spinners"

const PostcodeSearch = ({
  value,
  onChange,
  onSubmit,
  isLoading = false,
  onError,
}) => {
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

  useEffect(() => {
    if (error) onError?.(error)
  }, [error])

  return (
    <Fieldset styles={{ position: "relative" }}>
      <Label>Postcode</Label>
      <TextField
        disabled={isLoading}
        error={error}
        value={value}
        onChange={handleChange}
        required
      />
      <HelperText color="red">{dirty && error}</HelperText>

      <Button
        type="submit"
        styles={{ width: "100%" }}
        onClick={validate}
        disabled={isLoading || !value || error}
      >
        Search
      </Button>
      <Overlay visable={isLoading}>
        <DotLoader color={"#1976d2"} css={{ margin: "0 auto" }} />
      </Overlay>
    </Fieldset>
  )
}

export default PostcodeSearch
