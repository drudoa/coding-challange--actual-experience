import styled from "styled-components"

export default styled.span(({ styles, color }) => ({
  display: "block",
  padding: "6px 0px",
  minHeight: 36,
  letterSpacing: "0.02857em",
  fontSize: "0.875rem",
  lineHeight: 1.75,
  boxSizing: "border-box",
  color: color ?? "inhert",
  ...styles,
}))
