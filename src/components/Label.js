import styled from "styled-components"

const Label = styled.label(({ styles }) => ({
  display: "block",
  padding: "6px 0",
  letterSpacing: "0.02857em",
  fontSize: "0.875rem",
  lineHeight: 1.75,
  ...styles,
}))

export default Label
