

function checkPrimeNum(num){
    if (num <= 1000){
        if (num <= 1){
            console.log('Число является четным!');
            return 0;
        }
        if (num == 2){
            console.log('Число является простым!');
            return 0;
        }
        if (num % 2 == 0){
            console.log('Число является четным!');
            return 0;
        }
        for (let i=3; i<(num**0.5+1); i+=2){
            console.log(i)
            if (num % i == 0) {
                console.log('Число является простым!');
                return 0;
            }
            console.log('Число является нечетным!');
            return 0;
        }
    }
    else {
        console.log('Введенные Вами данные неверны!')
    }
}

checkPrimeNum(333)