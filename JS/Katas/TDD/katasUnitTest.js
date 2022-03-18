//Kata1

const testReverseString1 = () => {
    let result = reverseString("abacate");
    console.assert(result === "etacaba", {
        "function": 'reverseString("abacate")',
        "expected": "etacaba",
        "result": result
    });
}

const testReverseString2 = () => {
    let result = reverseString(123);
    console.assert(result === "input não é uma string", {
        "function": 'reverseString(123)',
        "expected": "input não é uma string",
        "result": result
    });
}

const reverseString = (str) => {
    let reverse = "";
    if (
        typeof str !== "string" ||
        str === undefined ||
        str === ""
    ) {
        reverse = "input não é uma string"
        return reverse
    } else {
        for (let i = str.length - 1; i >= 0; i--) {
            reverse += str[i];
        }
    }
    return reverse;
}

testReverseString1()
testReverseString2()

/* ===================================================== */

//Kata2

const testReverseSentence1 = () => {
    let result = reverseSentence("bob likes dogs");
    console.assert(result === "dogs likes bob", {
        "function": 'reverseString("bob likes dogs")',
        "expected": "dogs likes bob",
        "result": result
    });
}

const testReverseSentence2 = () => {
    let result = reverseSentence("bob");
    console.assert(result === "input deve conter pelo menos duas palavras", {
        "function": 'reverseString("bob")',
        "expected": "input deve conter pelo menos duas palavras",
        "result": result
    });
}

const reverseSentence = (sent) => {
    let reverseArr = [];
    let splitSent = sent.split(" ");
    if (splitSent.length <= 1) {
        return "input deve conter pelo menos duas palavras"
    } else {
        for (let i = splitSent.length - 1; i >= 0; i--) {
            if (i === 0) {
                reverseArr.push(splitSent[i]);
            } else {
                reverseArr.push(splitSent[i] + " ");
            }
        }
        let reverseSent = reverseArr.join("")
        return reverseSent;
    }

}

testReverseSentence1()
testReverseSentence2()

/* ===================================================== */

//Kata3

const testMinimumValue1 = () => {
    let result = minimumValue([3, 5, 1, 8]);
    console.assert(result === 1, {
        "function": 'minimumValue([3, 5, 1, 8])',
        "expected": "1",
        "result": result
    });
}

const testMinimumValue2 = () => {
    let result = minimumValue([3, 5.5, 1, -8]);
    console.assert(result === -8, {
        "function": 'minimumValue([3, 5.5, 1, -8])',
        "expected": "-8",
        "result": result
    });
}

const minimumValue = (arr) => {
    let minArr = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (minArr > arr[i]) {
            minArr = arr[i]
        }
    }
    return minArr
}

testMinimumValue1()
testMinimumValue2()

/* ===================================================== */

//Kata4

const testMaximumValue1 = () => {
    let result = maximumValue([3, 5, 1, 8]);
    console.assert(result === 8, {
        "function": 'minimumValue([3, 5, 1, 8])',
        "expected": "8",
        "result": result
    });
}

const testMaximumValue2 = () => {
    let result = maximumValue([3, 5.5, 1, -8]);
    console.assert(result === 5.5, {
        "function": 'minimumValue([3, 5.5, 1, -8])',
        "expected": "5.5",
        "result": result
    });
}

const maximumValue = (arr) => {
    let maxArr = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (maxArr < arr[i]) {
            maxArr = arr[i]
        }
    }
    return maxArr
}

testMaximumValue1()
testMaximumValue2()

/* ===================================================== */

//Kata5


const testCalculateRemainder1 = () => {
    let result = calculateRemainder(5.5, 3);
    console.assert(result === 2.5, {
        "function": 'calculateRemainder(5.5, 3)',
        "expected": "2.5",
        "result": result
    });
}

const testCalculateRemainder2 = () => {
    let result = calculateRemainder(5, 0);
    console.assert(result === "Não existe divisão por zero", {
        "function": 'calculateRemainder(5, 0)',
        "expected": "Não existe divisão por zero",
        "result": result
    });
}

const calculateRemainder = (a, b) => {
    let remainder = a % b;
    if (b !== 0) {
        return remainder
    } else {
        return "Não existe divisão por zero"
    }
}

testCalculateRemainder1()
testCalculateRemainder2()

/* ===================================================== */

//Kata6

const testDistinctValues1 = () => {
    let result = distinctValues("1 3 5 3 7 3 1 1 5");
    console.assert(result === "1 3 5 7", {
        "function": 'distinctValues("1 3 5 3 7 3 1 1 5")',
        "expected": "1 3 5 7",
        "result": result
    });
}

const testDistinctValues2 = () => {
    let result = distinctValues("135373115");
    console.assert(result === "1 3 5 7", {
        "function": 'distinctValues("135373115")',
        "expected": "1 3 5 7",
        "result": result
    });
}

const distinctValues = (str) => {
    let distinct = "";
    for (let i = 0; i < str.length; i++) {
        if (!distinct.includes(str[i])) {
            distinct += str[i]
        }
    }
    distinct = distinct.replaceAll(' ', '').split('').join(' ')
    return distinct
}

testDistinctValues1()
testDistinctValues2()

/* ===================================================== */

//Kata7

const testCountValues1 = () => {
    let result = countValues("1 3 5 3 7 3 1 1 5");
    console.assert(result === "1(3) 3(3) 5(2) 7(1)", {
        "function": 'countValues("1 3 5 3 7 3 1 1 5")',
        "expected": "1(3) 3(3) 5(2) 7(1)",
        "result": result
    });
}

const testCountValues2 = () => {
    let result = countValues("135373115");
    console.assert(result === "1(3) 3(3) 5(2) 7(1)", {
        "function": 'countValues("135373115")',
        "expected": "1(3) 3(3) 5(2) 7(1)",
        "result": result
    });
}

const countValues = (str) => {
    let counter = []
    str = str.replaceAll(" ", "").split("")
    for (let i = 0; i < str.length; i++) {
        if (!counter.includes(str[i])) {
            counter.push(str[i])
        }
    }

    for (let i = 0; i < counter.length; i++) {
        let count = 0
        for (let j = 0; j < str.length; j++) {
            if (counter[i] === str[j]) {
                count++
            }
        }
        counter[i] = counter[i] + `(${count})`
    }
    counter = counter.join(" ")
    return counter
}

testCountValues1()
testCountValues2()

/* ===================================================== */

//Kata8

const testEvaluateExpression1 = () => {
    let result = evaluateExpression("a + b + c - d", { a: 1, b: 7, c: 3, d: 14 });
    console.assert(result === -3, {
        "function": 'evaluateExpression("a + b + c - d", { a: 1, b: 7, c: 3, d: 14 })',
        "expected": "-3",
        "result": result
    });
}

const testEvaluateExpression2 = () => {
    let result = evaluateExpression("a * b * c * d", { a: 1, b: 7, c: 3, d: 14 });
    console.assert(result === 294, {
        "function": 'evaluateExpression("a * b * c * d", { a: -1, b: 7, c: -3, d: 14 })',
        "expected": "294",
        "result": result
    });
}

const evaluateExpression = (str, obj) => {

    let keys = Object.keys(obj);
    for (let i = 0; i < str.length; i++) {

        if (keys.includes(str[i])) {
            str = str.replace(str[i], obj[str[i]])
        }
    }
    return eval(str);
}

testEvaluateExpression1()
testEvaluateExpression2()

