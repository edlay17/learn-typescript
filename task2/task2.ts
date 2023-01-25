/*
// Необходимо написать типовую функцию Last, которая возвращает последний элемент переданного массива или кортежа

const test1: Last<[1, 2, 3]> = 3;
const test2: Last<[1]> = 1;

// never
const test3: Last<[]>;
*/

interface Last {
    (array: any[]): any | never; 
}

const a: Last = (array) => {
    if (array.length > 0) {
        return array[array.length-1];
    }
}

console.log(a([]));
console.log(a([1]));
console.log(a([1,2,3,4,5]));


