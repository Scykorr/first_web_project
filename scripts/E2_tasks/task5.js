const arr = [0, null, NaN, 0, 1, 2, 4, "str"];
console.log('количество элементов: ', arr.length);

arr.forEach(function(item){
    console.log(item);
});