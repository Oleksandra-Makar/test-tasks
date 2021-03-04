function task_1 (array) {
    return array.map(array.pop, [... array]);
}

function task_2 (a1, a2) {
    if ( !Array.isArray(a1) || !Array.isArray(a2)  || a1.length !== a2.length) {
        return false
    } 
    
    const array1 = a1.sort().map(value => (String(value))).join();
    const array2 = a2.sort().map(value => (String(value))).join();
    
    return array1 == array2 ? true : false;
}

function task_4 (array) {
    const sumOfEvenNumbers = array.filter(number => number % 2 == 0).reduce((a, b) => a + b);
    const sumOfOddNumbers = array.filter(number => number % 2 !== 0).reduce((a, b) => a + b);
    return sumOfEvenNumbers - sumOfOddNumbers
}

function task_5 (str, letter) {
    const indexes = [];
    const lowerCaseStr = str.toLowerCase();
    const lowerCaseLetter = letter.toLowerCase();

    for( let i=0; i < lowerCaseStr.length; i++ ) {
        if (lowerCaseStr[i] === lowerCaseLetter) indexes.push(i + 1);
    }
    return indexes
}

function task_6 (str, letter) {
    const indexes = [];
    const lowerCaseStr = str.toLowerCase();
    const lowerCaseLetter = letter.toLowerCase();

    for( let i=0; i < lowerCaseStr.length; i++ ) {
        if (lowerCaseStr[i] === lowerCaseLetter) indexes.push(i + 1);
    }
    return indexes.length
}

function task_7 (array) {
    let result = [];
    array.reduce((res, value) => {
        if (!res[value.currency]) {
            res[value.currency] = { currency: value.currency, value: 0 };
            result.push(res[value.currency])
        }
        res[value.currency].value += value.value;
        return res;
    }, {});
    return result
}

function task_8 (array) {
    const replacedString = array.map(element => element.toString().replace(/[^a-z0-9\s]/gmi, ''));
    
    return replacedString.join('');
}

function task_9 (array) {
    const filteredArray = array.filter(element=>{return element.done === true});
    
    return array.length === filteredArray.length ? true : false;
}

function task_10 (str, number) {
    let changedString = "";
    
    for (let i = 0; i < str.length; i++) {
      let character = str[i];
      if (character.match(/[a-z]/i)) {
        let unicode = str.charCodeAt(i);
  
        if (unicode >= 65 && unicode <= 90) {
            character = String.fromCharCode(((unicode - 65 + number) % 26) + 65);
        } else if (unicode >= 97 && unicode <= 122) {
            character = String.fromCharCode(((unicode - 97 + number) % 26) + 97);
        }
      } else {
        console.log('Please, input alphabetic characters!')
        return changedString
      }
      changedString += character;
    }
    return changedString;
};


module.exports = { 
    task_1, 
    task_2, 
    task_4, 
    task_5, 
    task_6, 
    task_7, 
    task_8, 
    task_9,
    task_10 
}