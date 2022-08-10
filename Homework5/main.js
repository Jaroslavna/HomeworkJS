//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area (a,b) {
    return a*b;
}
 let result= area(2,23);
console.log(result);

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function circle (pi, r){
    return 2*pi*r;
}
let result1=circle(3.14, 1);
console.log(result1);
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder (r,h){
    return 2*3.14*r*h;
}
let result2=cylinder(2,5);
console.log(result2);
//- створити функцію яка приймає масив та виводить кожен його елемент

function arrayLoop (array)
{
    for (const arr of array)
    {
        console.log(arr);
    }

}
     arrayLoop ([2,4,6,-10,56,34]);
     arrayLoop( [789,98,98958]);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textAdd (text){
    return text;
}
let result3=textAdd('hrhfkfhkhfkrhfkfhk  ghgnhnhnfhn');
 document.write(`<p>${result3}</p>`);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function  ulAdd(text){
    return text;
}
let result4=ulAdd('lifdgu  hgkhkhj');
document.write(`<div><ul><li>${result4}</li> <li>${result4}</li> <li>${result4}</li></ul></div>`);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function poo(text,never)
{ document.write(`<ul>`);
     {
        for (i=0; i<=never; i++)
document.write(`<div><li>${text}</li></div`);
    }
    document.write(`</ul>`);
}
poo("ekfj rklgl kgjnkx",2);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayAny=[34,-27,'ihhf',true];
function chekList(array)
{
    for (const arrayElement of array) {
document.write(`<div><li>${arrayElement}</li></div>`)
    }
}
chekList(arrayAny);



//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//- створити функцію яка повертає найменьше число з масиву
 const arr=[45,-89,23,1,6,-12];
 function minArr ( array) {
     let min=array[0]
     for (const item of array) {
         if (min>item)
         {
             min=item;
         }
     }
     return min;
 }
console.log(minArr(arr));
//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arr1=[2,8,100,3] //113
function sumNumber(array)
{   let sum=0;
    for (const elementOfArr of array)
    {
        sum+=elementOfArr;
        array=sum;
    }
    return array;
}
console.log(sumNumber(arr1));
