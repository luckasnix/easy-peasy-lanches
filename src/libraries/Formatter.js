export function toCapitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatPrice(price) {
  if (price < 10) {
    return 'R$ 0,0' + price.toString(10)
  } else if (price < 100) {
    return 'R$ 0,' + price.toString(10)
  } else {
    return 'R$ ' + price.toString(10).slice(0,-2) + ',' + price.toString(10).slice(-2)
  }
}