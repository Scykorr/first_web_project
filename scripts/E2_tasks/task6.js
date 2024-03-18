const arrayVals = [1, 1, 1, 1];

const setValues = new Set(arrayVals);

if (setValues.size === 1) {
    console.log('Все элементы в массиве одинаковые.')
}
else {
    console.log('Элементы в массиве неодинаковые.')
}
