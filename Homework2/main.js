
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let ar=[2, 4, 1988, 'music', -345, 'okean elzy', 3.14, 'true', 'xxx', 34];
console.log(ar [0]);
console.log(ar [1]);
console.log(ar [2]);
console.log(ar [3]);
console.log(ar [4]);
console.log(ar [5]);
console.log(ar [6]);
console.log(ar [7]);
console.log(ar [8]);
console.log(ar [9]);


//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

 let book1 = {
    title: 'Three men in a boat',
    pageCount: 456,
    genre: 'novel'
};
 let book2 = {
    title: 'Robinson Crusoe',
    pageCount: 607,
    genre: 'novel'
};
 let book3 = {
     title: 'Dracula',
     pageCount: 215,
     genre: 'story'
 };
 console.log(book1);
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - масив. Кожен автор має поля name,age
let book4 = {
    title: 'Three men in a boat',
    pageCount: 456,
    genre: 'novel',
    authors: [
        { name:'J.Jerom', age:45}
        ]
};
let book5 = {
    title: 'Robinson Crusoe',
    pageCount: 607,
    genre: 'novel',
        authors: [
        { name:'D.Defo', age:67}
    ]

};
let book6 = {
    title: 'Dracula',
    pageCount: 215,
    genre: 'story',
    authors: [
        {name:'B.Stocker', age:50}
    ]
};
console.log(book5.authors);

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let people =[
    {name: 'Leanne Graham', username:'Bret', password:'dfhfh'},
    {name: 'Ervin Howell', username:'Antonette', password:'dgfd'},
    {name: 'Clementine Bauch', username:'Samantha', password:'sdfzg'},
    {name: 'Patricia Lebsack', username:'Karianne', password:'fds7867'},
    {name: 'Vasia Koks', username:'Kamren', password:'dkjdhfkdshfk09'},
    {name: 'Chelsey Dietrich', username:'Skiles Walks', password:'dgxdgxdg44'},
    {name: 'Mrs. Dennis Schulist', username:'Ok', password:'454666d'},
    {name: 'Kurtis Weissnat', username:'Elwyn.Skiles', password:'3536'},
    {name: 'No name', username:'Maxime_Nienow', password:'dgdfr46fh'},
    {name: 'Maxime_Nienow', username:'Nicholas Runolfsdottir V', password:'xgfgfx'}
];

    people.forEach (function(pas) {console.log(pas.password)});
    console.log(people[0].password);

