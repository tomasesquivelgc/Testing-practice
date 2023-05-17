const capitalize = (string) => {
  if (typeof string !== 'string' || string.length === 0) {
    return string; // Return the input if it's not a non-empty string
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;