exports.shuffle = array => {
  var currentIndex = array.length, temporaryValue, randomIndex

  // while there remain elements to shuffle...
  while (0 !== currentIndex) {
    // pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // swap it with the current element
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

exports.delayedResponse = (res, fileData) => {
  setTimeout(() => {
    res.send(fileData)
  }, 500)
}

exports.jsonObjToList = jsonObj => {
  if (!jsonObj) return []

  var obj = JSON.parse(jsonObj)

  return Object.keys(obj).map(key => ({
    key: key,
    value: obj[key]
  }))
}

/**
  * Flatten a two-demensional array into a one-demensional array.
  * @param {Array} arr - The target array to run map and concat on.
  */
exports.concatAll = arr => arr
  .reduce((acc, nextArr) => acc.concat(nextArr), [])

/**
  * Shorthand method to chain map() and concatAll().
  * @param {Function} projectionFn - The function that used in map and must return an array.
  * @param {Array} arr - The target array to run map and concat on.
  */
exports.concatMap = (projectionFn, arr) => arr
  .map(el => projectionFn(el))
  .reduce((acc, nextArr) => acc.concat(nextArr), [])

/**
  * The curried version of concatMap().
  * @param {Function} projectionFn - The function that used in map and must return an array.
  * @param {Array} arr - The target array to run map and concat on.
  */
exports.curriedConcatMap = projectionFn => arr => arr
  .map(el => projectionFn(el))
  .reduce((acc, nextArr) => acc.concat(nextArr), [])
