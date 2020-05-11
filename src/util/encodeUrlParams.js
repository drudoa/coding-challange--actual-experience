export default (params) => {
  return encodeURI(
    Object.entries(params)
      .map(([key, value]) => value && `${key}=${value}`)
      .join("&")
  )
}
