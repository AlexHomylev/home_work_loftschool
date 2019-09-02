/* eslint-disable newline-after-var */
/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let copy = [];
    for (let i = 0; i < array.length; i++ ) { 
        let item = fn(array[i], i, array); 
        copy.push(item); 
    }
    
    return copy; 
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    let i = 0;
    let prev = initial;

    if (!initial) {
        prev = array[i++];
    }

    for ( let j=i; j < array.length; j++ ) { 
        prev = fn(prev, array[j], j, array);
    }
    
    return prev; 
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let appProp = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)){
      appProp.push(prop.toUpperCase());
        }
    }
    return appProp;
  }
/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    let sliceArr = [];
    if(from < 0){
        from = array.length + from;
    }
    if(to < 0){
        to = array.length + to;
    }
    for (let i = from; to < array.length; i++ ) { 
        sliceArr.push(array[i]);
    }
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {}

export { forEach, map, reduce, upperProps, slice, createProxy };
