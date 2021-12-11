function SwitchWind(dir) {
  switch (true) {
    case dir <= 44 || dir >= 316:
      return "North";
    case dir >= 225 && dir <= 315:
      return "West";
    case dir <= 224 && dir >= 135:
      return "South";
    case dir >= 45 && dir <= 134:
      return "East";
    default:
      return dir;
  }
}

export default SwitchWind;
