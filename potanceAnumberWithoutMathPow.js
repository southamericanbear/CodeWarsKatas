function numberToPower(number, power) {
  var i,
    pow = 1;

  for (i = 0; i < power; i++) {
    pow = pow * number;
  }

  return pow;
}
