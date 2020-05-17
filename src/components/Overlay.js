import styled from "styled-components"

export default styled.div(({ styles, visable }) => ({
  display: !visable ? "none" : "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(255,255,255, 0.7)",
  styles,
}))
