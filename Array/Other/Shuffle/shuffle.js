/**
 * @param {any[]} arr
 * @returns {void}
 */
function shuffle(arr) {
  if (arr.length < 1) {
    return [];
  }

  for (let i = 0; i < arr.length; i += 1) {
    const randIdx = Math.floor(Math.random() * (i + 1));
    [arr[randIdx], arr[i]] = [arr[i], arr[randIdx]];
  }

  return arr;
}

// console.log(shuffle([1, 2, 3, 4]));