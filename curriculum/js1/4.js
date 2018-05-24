/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a,b,c='') => 
{
  if (a===0) return c;
  return solution (a-1,b, c+b);
};

module.exports = {
  solution,
};
