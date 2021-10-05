// I map the speed of the red  team and matched it against the blue team using math max in case needMaxSpeed its true
//Otherwise will use math min and will return the lowest speed.
// Then we add all the number looping with a forEach method and then return the sum of all speeds
const sumOftheMaxSpeed = (blueTeam, redTeam, needMaxSpeed) => {
  let maxSpeeds;
  if (needMaxSpeed) {
    maxSpeeds = redTeam.map((item, i) => Math.max(item, blueTeam[i]));
  } else {
    maxSpeeds = redTeam.map((item, i) => Math.min(item, blueTeam[i]));
  }
  let sumOftheSpeed = 0;
  maxSpeeds.forEach((num) => {
    sumOftheSpeed += num;
  });
  return sumOftheSpeed;
};

console.log(sumOftheMaxSpeed([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true));
