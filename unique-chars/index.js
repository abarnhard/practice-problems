exports.unique = function unique(string) {
  if (!string.length) { return true; }

  let chars = {};

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (chars[char]) { return false; }

    chars[char] = true;
  }

  return true;
};

exports.uniqueNoStruct = function uniqueNoStruct(string) {
  if (!string.length) { return true; }

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[j] === string[i]) { return false; }
    }
  }

  return true;
};
