const myArray = [1, 4, 9, 16];

//forEach() method executes a provided function once for each array element
function newForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        let currentValue = array[index]
        callback(currentValue, index, array)
    }
}
newForEach(myArray, x => console.log(x))
myArray.forEach(x => console.log(x))


//map() method returns a new array with the results of calling a provided function on every element in the calling array.
function newMap(array, callback) {
    let newArray = []
    for (let index = 0; index < array.length; index++) {
        let currentValue = array[index]
        newArray[newArray.length] = callback(currentValue, index, array)
    }
    return newArray
}
console.log(newMap(myArray, x => x * 2))
console.log(myArray.map(x => x * 2))


//some() method tests whether at least one element in the array passes the test by the provided function
function newSome(array, callback) {
    for (let index = 0; index < array.length; index++) {
        let currentValue = array[index];
        if (callback(currentValue, index, array)) {
            return true
        }
    }
    return false
}
console.log(newSome(myArray, x => x % 2 === 0))
console.log(myArray.some(x => x % 2 === 0))


//find() method returns the value of the first element in the provided array that satisfies the provided testing function.
function newFind(array, callback) {
    for (let index = 0; index < array.length; index++) {
        let currentValue = array[index];
        if (callback(currentValue, index, array)) {
            return currentValue
        }
    }
    return undefined
}
console.log(newFind(myArray, x => x > 16))
console.log(myArray.find(x => x > 16))


//findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test. 
function newFindIndex(array, callback) {
    for (let index = 0; index < array.length; index++) {
        let currentValue = array[index];
        if (callback(currentValue, index, array)) {
            return index
        }
    }
    return -1
}
console.log(newFindIndex(myArray, x => x > 5))
console.log(myArray.findIndex(x => x > 5))


//every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
function newEvery(array, callback) {
    for (let index = 0; index < array.length; index++) {
        let currentValue = array[index];
        if (!callback(currentValue, index, array)) {
            return false
        }
    }
    return true
}
console.log(newEvery(myArray, x => x < 16))
console.log(myArray.every(x => x < 16))


//filter() method creates a new array with all elements that pass the test implemented by the provided function.
function newFilter(array, callback) {
    let newArray = [];
    let aux = 0;
    for (let index = 0; index < array.length; index++) {
        let currentValue = array[index]
        if (callback(currentValue, index, array)) {
            newArray[aux] = currentValue  //id. newArray[newArray.length] <=> newArray[aux]; aux++
            aux++
        }
    }
    return newArray
}
console.log(newFilter(myArray, x => x > 4))
console.log(myArray.filter(x => x > 4))


/* ###BONUS### */
const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['x', 'y', 'z'];

//concat() method is used to merge two or more arrays
function newConcat(...array) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        newArray = [...newArray, ...array[index]]
    }
    return newArray
}
console.log(arr1.concat(arr2))
console.log(newConcat(arr1, arr2))


//includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
function newIncludes(array, item, fromIndex) {
    if (!fromIndex) { fromIndex = 0 };
    for (fromIndex; fromIndex < array.length; fromIndex++) {
        if (array[fromIndex] === item) {
            return true;
        }
    }
    return false;
}
console.log(arr1.includes('b', 1))
console.log(newIncludes(arr1, 'b', 1))


//indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
function newIndexOf(array, item, fromIndex) {
    if (!fromIndex) { fromIndex = 0 };
    for (fromIndex; fromIndex < array.length; fromIndex++) {
        if (array[fromIndex] === item) {
            return fromIndex;
        }
    }
    return -1;
}
console.log(arr1.indexOf('d', 1))
console.log(newIndexOf(arr1, 'd', 1))


//join() method creates and returns a new string by concatenating all of the elements in an array, separated by a specified separator string.
function newJoin(array, separator) {
    let newString = ""
    for (let index = 0; index < array.length; index++) {
        if (index < array.length - 1) {
            newString += `${array[index]}${separator}`;
        } else {
            newString += `${array[index]}`;
        }
    }
    return newString;
}
console.log(arr1.join(' - '))
console.log(newJoin(arr1, ' - '))


//slice() method returns a partial copy of an array into a new array object selected from start to end (not included) where start and end represent the index of items in that array. The original array will not be modified.
function newSlice(array, fromIndex, toIndex) {
    let newArray = [];
    let aux = 0;
    if (!fromIndex) { fromIndex = 0 }
    if (!toIndex) { toIndex = array.length }
    for (fromIndex; fromIndex < toIndex; fromIndex++) {
        newArray[aux] = array[fromIndex];
        aux++
    }
    return newArray;
}
console.log(arr1.slice(1, 3))
console.log(newSlice(arr1, 1, 3))


const arrFlat = [1, 2, [4, [5, 6], ,], [1, 2]]
//flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
function newFlat(array, depth) {
    let auxArray = []
    if (!depth) { depth = 1 }

    for (let i = 0; i < array.length; i++) {
        if (depth > 0) {
            for (let j = 0; j < array.length; j++) {
                if (Array.isArray(array[j])) {
                    for (let k = 0; k < array[j].length; k++) {
                        auxArray[auxArray.length] = array[j][k]
                    }
                } else {
                    auxArray[auxArray.length] = array[j]
                }
            }
            depth--
            array = auxArray
            auxArray = []
            i = -1
        }
        if (array[i] !== undefined) {
            auxArray[auxArray.length] = array[i]
        }
    }
    return auxArray
}
console.log(arrFlat.flat(2))
console.log(newFlat(arrFlat, 2))


//flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.
function newFlatMap(array, callback) {
    let newArray = []

    for (let index = 0; index < array.length; index++) {
        let currentValue = array[index]
        newArray[newArray.length] = callback(currentValue, index, array)
    }

    array = newArray
    newArray = []

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            for (let j = 0; j < array[i].length; j++) {
                newArray[newArray.length] = array[i][j]
            }
        } else {
            newArray[newArray.length] = array[i]
        }
    }
    return newArray
}
console.log(arrFlat.flatMap(x => [x * 2]))
console.log(newFlatMap(arrFlat, x => [x * 2]))


//Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
function newArrayOf() {
    let newArray = []
    for (let index = 0; index < arguments.length; index++) {
        newArray[newArray.length] = arguments[index]
    }
    return newArray
}
console.log(Array.of(1, 2, 3))
console.log(newArrayOf(1, 2, 3))






