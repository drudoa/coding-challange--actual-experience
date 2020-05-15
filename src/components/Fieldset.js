import styled from "styled-components"

export default styled.fieldset(({ styles }) => ({
  border: 0,
  boxSizing: "border-box",
  width: "100%",
  ...styles,
}))
