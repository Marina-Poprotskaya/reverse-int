module.exports = function reverse (n) {
    if (n<0) {
        n = -n;
      }
      n=String(n);
      return n= n.split('').reverse().join('');
}
