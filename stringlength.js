

const stringlength = (string) => {
  if (string.length > 1 && string.length < 10) {
    return string.length;
  }
  return 'Oops! error';
};

module.exports = stringlength;