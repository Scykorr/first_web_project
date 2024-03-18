let cars = new Map();
cars.set(1, 'BMW');
cars.set("car1", 'Mercedes');
cars.set(true, 'Ferrari');

const keys = cars.keys();

for (let key of keys) {
    console.log(`Ключ - ${key}, значение - ${cars.get(key)}`);
}