export default (params) => {
  return Object.entries(params)
    .map(([key, value]) => value && `${key}=${value}`)
    .join("&")
}
