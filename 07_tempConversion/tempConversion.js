const ftoc = function(temp) {
  temp = +(temp)  - 32;
  temp = (temp * (5 / 9));
  return (Math.round(temp * 10) / 10);



};

const ctof = function(temp) {
  temp = +(temp) * (9 / 5);
  temp = temp + 32;
  return (Math.round(temp * 10) / 10);

};








// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
