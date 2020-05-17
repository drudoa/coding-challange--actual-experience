// ref: https://ideal-postcodes.co.uk/guides/postcode-validation

export default (postcode) => {
  const regex = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i
  return regex.test(postcode)
}
