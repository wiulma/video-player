let debounceTimeout

export function debounce(fn, delay) {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout)
  }
  debounceTimeout = setTimeout(fn, delay)
}
