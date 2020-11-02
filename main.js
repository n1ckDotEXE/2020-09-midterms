const isValidPassword = input => {
  if (input.length < 12 || input.includes(' ') || input.includes('.')) {
    return false;
  } else {
    return true;
  }
}

function onlyCs(input) {
  let filtered = [];
  input.forEach(score => {
    if (score >= 70 && score <= 79) {
      filtered.push(score);
    }
  });
  return filtered;
}

function countBs(input) {
  let total = 0;
  input.forEach(score => {
    if (score >= 80 && score <= 89) {
      total += 1;
    }
  });
  return total;
}

function lastIndexOfPunctuation(input) {
  let position = [
    input.lastIndexOf("."),
    input.lastIndexOf("!"),
    input.lastIndexOf("?")
  ];
  return position.length > 1 ? Math.max.apply(Math, position) : -1;
}

function deleteMiddleLetters(input) {
  if (input.length % 2 === 0) {
    let mid1 = Math.floor(input.length / 2) + 1;
    let mid2 = Math.floor(input.length / 2) - 1;
    return input.slice(0, mid2) + input.slice(mid1);
  } else {
    let mid = Math.floor(input.length / 2);
    return input.slice(0, mid) + input.slice(mid + 1);
  }
}

function getCenturies(input) {
  let converted = [];

  const ordinalConversion = i => {
    var j = i % 10, 
        k = i % 100;

    if (j == 1 && k != 11) {
      return i + "st";
    } else if (j == 2 && k != 12) {
      return i + "nd";
    } else if (j == 3 && k != 13) {
      return i + "rd";
    }
    return i + "th";
  };
  input.forEach(year => {
    let century = Math.ceil(year / 100);
    converted.push(ordinalConversion(century));
  });
  return converted;
}

// Our code below. Don't touch!
if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof onlyCs === 'undefined') {
  onlyCs = undefined;
}

if (typeof countBs === 'undefined') {
  countBs = undefined;
}

if (typeof lastIndexOfPunctuation === 'undefined') {
  lastIndexOfPunctuation = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof getCenturies === 'undefined') {
  getCenturies = undefined;
}



module.exports = {
  isValidPassword,
  onlyCs,
  countBs,
  lastIndexOfPunctuation,
  deleteMiddleLetters,
  getCenturies,
}
