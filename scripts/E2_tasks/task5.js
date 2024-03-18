let arrayVals = [1, 1, 1, 1];

let equalVal = true;

if (arrayVals.length === 0){
    console.log('Введенный массив пустой!');
}
else {
    arrayVals.forEach(function (item, index, array) {
        console.log(item);
    })
}