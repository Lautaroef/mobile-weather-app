function SwitchDate(todayDate) {
  switch (todayDate) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Thursday";
    case 3:
      return "Wednesday";
    case 4:
      return "Tuesday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";

    default:
      break;
  }

  return todayDate;
}

export default SwitchDate;
