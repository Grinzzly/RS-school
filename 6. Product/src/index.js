module.exports = function multiply(first, second) {

    let flag = 0;
    let result = [];

    let firstNumeric = first.split('');
    let secondNumeric = second.split('');
    if (firstNumeric.length < secondNumeric.length) {
        firstNumeric = second.split('');
        secondNumeric = first.split('');
    }
    const equal = firstNumeric.length - secondNumeric.length;
    for (let i = 0; i < equal; i++){
        secondNumeric.unshift(0);
    }
    for (let i = firstNumeric.length - 1; i > 0; i--) {
        if (firstNumeric[i] === 0){
            result.unshift(firstNumeric[i]);
            firstNumeric.pop();
        } else {
            i = 0;
        }
    }

    let number = 0;

    for (let i = secondNumeric.length - 1; i > 0; i--) {
        if (secondNumeric[i] === 0) {
            result.unshift(secondNumeric[i]);
            secondNumeric.pop();
        } else {
            i = 0;
        }
    }

    let firstDec = 0;
    let secondDec = 0;
    let iter1 = 1;
    let iter2 = 1;

    let n = 1;
    while (n !== 0){

        for (let i = 0; i < n; i++) {
            firstDec = firstNumeric[firstNumeric.length - iter1]*secondNumeric[secondNumeric.length - iter2] + firstDec;
            iter1--;
            iter2++;
        }
        if (firstDec > 9) {
            secondDec = (firstDec - (firstDec % 10)) / 10;
            number = firstDec % 10;
        } else {
            number = firstDec;
            secondDec = 0;
        }

        if (flag) {
            n--;
            iter1 = firstNumeric.length;
            iter2 = secondNumeric.length - n + 1;
        } else {
            n++;
            iter1 = n;
            iter2 = 1;
        }
        if (n === firstNumeric.length) {
            flag = 1;
        }

        result.unshift(number);
        if (n === 0 && secondDec !== 0) {
            result.unshift(secondDec);
        }
        firstDec = secondDec;
    }

    for (let i = 0; i < result.length; i++) {
        (result[0] === 0) ? result.shift() : i = result.length;
    }

    return result.join('');
};
