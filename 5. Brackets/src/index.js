module.exports = function check(str, bracketsConfig) {
    let implement = [];
    let checkNum = 0;
    for (let i = 0; i < bracketsConfig.length; i++) {
        implement[i] = bracketsConfig[i].join('');
    }
    let counter = 0;
    let j = 0;
    while(counter < implement.length) {
        while (j < str.length) {
            checkNum = str.indexOf(implement[counter]);
            if (checkNum !== -1){
                str = str.substring(0, checkNum) + str.substring(checkNum+implement[counter].length, str.length);
                counter = 0;
            } else {
                j = str.length;
            }
        }
        counter++;
        j = 0;
    }
    return (!str);
};