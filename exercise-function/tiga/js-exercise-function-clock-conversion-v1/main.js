// TODO: answer here

let clockConversion = (hour, data) => {
  if (hour < 1) {
    return `Hour cannot be under 1`;
  }

  if (data === "minutes") {
    return hour * 60;
  }

  return hour * 3600;
}

module.exports = clockConversion;