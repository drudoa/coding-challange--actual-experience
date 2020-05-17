import React, { useState } from "react"
import PropTypes from "prop-types"
import Fieldset from "./Fieldset"
import HelperText from "./HelperText"
import TextField from "./TextField"
import Button from "./Button"
import Label from "./Label"
import Overlay from "./Overlay"
import validatePostcode from "../util/validatePostcode"
import { DotLoader } from "react-spinners"
import { useSelector, useDispatch } from "react-redux"
import { fetchGeoLocation } from "../redux/actions/geoLocation"

const PostcodeSearch = ({ style }) => {
  const [value, setValue] = useState("")
  const [dirty, setDirty] = useState(false)
  const [error, setError] = useState("")
  const { data, isFetching, error: geoError } = useSelector(
    (state) => state.geoLocation
  )
  const dispatch = useDispatch()
  const lookupPostcode = (postcode) => dispatch(fetchGeoLocation(postcode))

  // basic postcode validation
  const validate = () => {
    setError("")

    if (!value) {
      setError("Postcode is required.")
      return
    } else if (!validatePostcode(value)) {
      setError("Postcode is invalid")
      return
    } else {
      lookupPostcode(value)
    }
  }

  // only show user errors if they have attempted to submit form
  const handleChange = (e) => {
    setError("")
    const val = e.target.value

    if (val) {
      setDirty(true)
    } else {
      setDirty(false)
    }
    setValue(val)
  }

  // handle enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") validate()
  }

  return (
    <Fieldset styles={{ position: "relative", flex: 1, ...style }}>
      <Label>Postcode</Label>
      <TextField
        disabled={isFetching}
        error={error}
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        required
      />
      <HelperText color="red">{dirty && (error || geoError)}</HelperText>

      <Button
        type="submit"
        styles={{ width: "100%" }}
        onClick={validate}
        disabled={isFetching || !value || error}
      >
        Crime Search
      </Button>

      {data && (
        <HelperText>
          {data.parish}, {data.admin_district}
        </HelperText>
      )}

      <Overlay visable={isFetching}>
        <DotLoader color={"#1976d2"} css={{ margin: "0 auto" }} />
      </Overlay>
    </Fieldset>
  )
}

PostcodeSearch.propTypes = {
  style: PropTypes.object,
}

export default PostcodeSearch
