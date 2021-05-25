// Align content in given length
exports.alignContent = (d, l = 6) => {
  if (d.toString().length > l) return d;
  return d + " ".repeat(l - d.toString().length);
};
