import styled from "styled-components"

const TextField = styled.input.attrs(() => ({
  type: "text",
}))(({ styles, size, error }) => ({
  padding: "5px 16px",
  borderRadius: 4,
  border: `1px solid ${error ? "red" : "palevioletred"}`,
  letterSpacing: "0.02857em",
  fontSize: "0.875rem",
  lineHeight: 1.75,
  boxSizing: "border-box",
  minWidth: 64,
  width: !size && "100%",
  "&:disabled": {
    backgroundColor: "#e0e0e0",
    borderColor: "rgba(0,0,0,0.26)",
  },
  ...styles,
}))

export default TextField
