export const charCheck = (str) => {
  const pattern = /^[a-zA-Z]+$/g
  return pattern.test(str)
}

export const qtyCheck = (str) => {
  const pattern = /^[0-9]*$/
  return pattern.test(str)

}

export const priceCheck = (str) => {
  const pattern = /^(0|[1-9]\d*)(\.\d+)?$/
  return pattern.test(str)
}


