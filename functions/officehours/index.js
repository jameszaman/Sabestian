module.exports = function officeHoursFunc(args) {
  // Make sure time was passed as arguments.
  if (!args.length) {
    console.log("Please provide a time");
    return;
  }

  // Convert time to minutes.
  for (let i = 0; i < args.length; i++) {
    const splitTime = args[i].split(":");
    if (splitTime.length > 1) {
      // If both hour and minutes were passed.
      args[i] = Number(splitTime[0] * 60) + Number(splitTime[1]);
    } else {
      // If only hour was passed.
      args[i] = Number(splitTime[0] * 60);
    }
  }

  // Calculating the remaining time.
  let remainingTime = args[0]; // This is the total time remaining.
  for (let i = 1; i < args.length; i++) {
    remainingTime -= args[i]; // Deduct the other times.
  }

  if (parseInt(remainingTime / 60) > 0) {
    console.log(
      `${parseInt(remainingTime / 60)} hours ${remainingTime % 60} minutes`
    );
  } else {
    console.log(`${remainingTime} minutes`);
  }
};
