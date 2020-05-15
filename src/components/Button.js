import styled from "styled-components"
import shiftColor from "../util/colorShiftHexColor"

const Button = styled.button(({ styles, color, hexColor, disabled }) => {
  const bg = hexColor ?? "#1976d2"
  const bgLight = shiftColor(bg, 60)
  const bgDark = shiftColor(bg, 0) // this is not guaranteed to return a valid color

  return {
    borderRadius: 4,
    minWidth: 64,
    boxSizing: "border-box",
    padding: "6px 16px",
    outline: 0,
    border: 0,
    backgroundColor: disabled ? "#e0e0e0" : bg,
    color: disabled ? "rgba(0, 0, 0, 0.26)" : color ?? "#fff",
    textTransform: "uppercase",
    letterSpacing: "0.02857em",
    fontSize: "0.875rem",
    lineHeight: 1.75,
    cursor: "pointer",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow:
      !disabled &&
      "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14)",
    "&:hover": {
      boxShadow:
        !disabled &&
        "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14)",
      backgroundColor: !disabled && bgDark,
    },
    "&:active": {
      boxShadow:
        !disabled &&
        "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14)",
      backgroundColor: !disabled && bgLight,
    },
    ...styles,
  }
})

export default Button
