
const isPositiveInteger = (value) => !isNaN(value) && value >= 0;

const validTimeUnit = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"];
const isTimeUnitInList = (label) => validTimeUnit.indexOf(label) !== -1;

const isValidTimeUnit = (value, label) => {
  
  switch (label) { 
      
    case "second":
    case "minute":
    case "hour":
    case "day":
      return (value === 1) ? true : false;
      
    case "seconds":
    case "minutes":
    case "hours":
    case "days":
      return (value === 1) ? false : true;
      
    default:
      console.log("Label not valid.");
      return false;
  }
}

const minuteSeconds = 60;
const hourSeconds = minuteSeconds * 60;
const daySeconds = hourSeconds * 24;

const convertToSeconds = (value, label) => {
  
  switch (label) {
      
    case "second":
    case "seconds":
      return value;
      
    case "minute":
    case "minutes":
      return value * minuteSeconds;
      
    case "hour":
    case "hours":
      return value * hourSeconds;
      
    case "day":
    case "days":
      return value * daySeconds;
      
    default:
      console.log("Can't convert to seconds.");
      return false;
  }
}

const convertToLarger = (seconds) => {
  
  if (seconds % daySeconds === 0) {
    const days = seconds / daySeconds;
    return (days === 1) ? [days, 'day'] : [days, 'days'];
    
  } else if (seconds % hourSeconds === 0) {
    const hours = seconds / hourSeconds;
    return (hours === 1) ? [hours, 'hour'] : [hours, 'hours'];
    
  } else if (seconds % minuteSeconds === 0) {
    const minutes = seconds / minuteSeconds;
    return (minutes === 1) ? [minutes, 'minute'] : [minutes, 'minutes'];
    
  } else {
    return (seconds === 1) ? [seconds, 'second'] : [seconds, 'seconds'];
  }
}

const timeAdder = (value1, label1, value2, label2) => {
  
  // check values
  if (!isPositiveInteger(value1)) {
    return false;
  }
  

  if (!isPositiveInteger(value2)) {
    return false;
  }
  

  // check labels
  if (!isTimeUnitInList (label1)) {
    return false;
  }
  

  if (!isTimeUnitInList (label2)) {
    return false;
  }
  

  // check values and labels
  if (!isValidTimeUnit (value1, label1)) {
    return false;
  }
  

  if (!isValidTimeUnit (value2, label2)) {
    return false;
  }

  // convert values to seconds
  const seconds1 = convertToSeconds(value1, label1);
  const seconds2 = convertToSeconds(value2, label2);

  // add seconds
  const result = seconds1 + seconds2;

  // return the value in larger possible format
  return convertToLarger(result);
}


console.log(timeAdder( 1, "minute",   3, "minutes"));
console.log(timeAdder( 5, "days",    25, "hours"));
console.log(timeAdder( 1, "minute", 240, "seconds"));