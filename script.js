function aveSpd(upTime, upSpd, downSpd) {
  // Convert upTime from minutes to hours
  let upTimeHours = upTime / 60;

  // Calculate the uphill distance
  let upDistance = upSpd * upTimeHours;

  // Calculate the downhill time in hours
  let downTimeHours = upDistance / downSpd;

  // Calculate the total distance (uphill + downhill)
  let totalDistance = upDistance + upDistance;

  // Calculate the total time (uphill time + downhill time)
  let totalTimeHours = upTimeHours + downTimeHours;

  // Calculate the average speed
  let averageSpeed = totalDistance / totalTimeHours;

  return averageSpeed;
}

// Do not change the code below
const upTime = parseInt(prompt("Enter upTime: "), 10);
const upSpd = parseInt(prompt("Enter upSpd: "), 10);
const downSpd = parseInt(prompt("Enter downSpd: "), 10);

alert(aveSpd(upTime, upSpd, downSpd));
