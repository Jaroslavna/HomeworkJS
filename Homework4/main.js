//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
    //user1='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
   // for (let i = 0; i < 10; i++ )
//{
    // document.write(`<div>${user1}</div>`);
//}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
 //items = [
   // {text:'lofbcfrem3'},
   // {text:'lorfgxbfem3'},
   // {text:'lofgdgxfrem4'},
   // {text:'lorefdgfhm3'},
    //{text:'lorrdgdfgem37'},
    //{text:'loremrtgrdg3'},
    //{text:'loreetrgtrgrm3'},
   // {text:'lorem3ete'},
    //{text:'lorem3drsers'},
    //{text:'lorem3rrty'}
//];
  //  for ( let j = 0; j < items.length; j++)
   // {
   //     document.write(`<div> ${items[j].text} </div>`);
   // }

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
  // user3 = 'kjhefjg;odhlgihfgkjk';
  // let i=0;
 //while (i < 19)
//{
   // document.write(`<div><h1>${user3}</h1></div>`);
  // i++;
//}
    //document.write('*************************')
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

  //  user4 = [
  // {text:'fdgxfhtfhjygjdtyudty'},
  // {text:'fdgxfhtfhjygjdtyudty'},
   //{text:'fdgxfhtfhjygjdtyudty'},
   //{text:'fdgxfhtfhj789ygjdtyudty'},
   //{text:'fdgxfhtfhjygjdtyudty'},
   //{text:'ghfjgjgjgh32334324cvnvn vnvv'},
   //{text:'fdgxfhtfhj466ygjdtyudty'},
   //{text:'fdgxfhtfhj4566ygjdtyudty'},
   //{text:'fdgxfhtfhjygjdtyudty'},
   //{text:'fdgxfhtfhjygjdtyudty'},
   //{text:'fdgxfhtfhjygj532dtyudty'},
   //{text:'fdgxfhtfhj5ygjdtyudty'},
   //{text:'fdgxfhtfhj432ygjdtyudty'},
  //{text:'fdgxfhtfhj466667ygjdtyudty'},
   //{text:'fdgxfhtfh765jygjdtyudty'},
   // {text:'dgxfhtfhjyg888jdtyudty'},
   // {text:'fdgxfhtfhjy5566gjdtyudty'},
  //  {text:'fdgxfhtfhjygjdtyudty'},
  //  {text:'fdgxfhtfhjy1234gjdtyudty'}
//];

    //let q=0;
  //while (q < user4.length)
//{
    //document.write(`<div><h1>${user4[q].text}</h1></div>`);
    //q++;
//}
//- Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону.
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву


//let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//for (let index=0; index<listOfItems.length; index++)
//{
    //document.write(`<div><li>${listOfItems[index]}</li> </div>`);
//}

//Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону  Зробити адекватну стилізацію
//Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

//let products = [
   // {
    //    title: 'milk',
    //    price: 22,
    //    image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    //},
   // {
       // title: 'juice',
      //  price: 27,
     //   image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    //},
   // {
    //    title: 'tomato',
       // price: 47,
      //  image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
   // },
   // {
   //     title: 'tea',
   //     price: 15,
    //    image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
   // }
//]
 //for (const product of products) {

  //  document.write (`
   // <div>
   // <h3> ${product.title} ${product.price} </h3>
   // <img src="${product.image}" alt="image">
  //  </div>`);
//}

//////////////////////////////////////////////////////////////////////////
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

//- користувачів зі статусом true
//for (let user of users)
 //{
    //if (user.status===true)
    //{
  // console.log(user);
 //  document.write(`<div>${user.name} ${user.status}</div>`);
   // }


//}
//- користувачів зі статусом false
//for (let user of users) {
   // if (user.status === false) {
     //   console.log(user);

    //}
//}
//- користувачів які старші за 30 років
for (let user of users) {
if (user.age > 30) {
console.log(user);

    }
}
