module.exports = function zeros(expression) {
    let values = expression.split('*');
    let result = 1;
    let sum = 0;
    let quantity = 0;
    let how = 0;
    values.forEach((value) => {
        quantity = +value.substring(0, value.indexOf('!'));
        if (value.indexOf('!!') === -1) {
            for (let j = 1; j <= quantity; j++){
                result = j;
                if (result%2 === 0) {
                    how++;
                }
                while (result%5 === 0){
                    result = result/5;
                    sum++;
                }
            }
        } else {
            if (quantity%2 !== 0) {
                for (let j = 1; j <= quantity; j++) {
                    result = j;
                    while(result%5 === 0) {
                        result = result/5;
                        sum++;
                        how--;
                    }
                    j++;
                }
            } else {
                for (let j = 1; j <= quantity; j++) {
                    j++;
                    how++;
                    result = j;
                    while (result%5 === 0) {
                        result = result/5;
                        sum++;
                    }
                }
            }
        }
    });
    return (how > 0) ? sum : 0;
};
