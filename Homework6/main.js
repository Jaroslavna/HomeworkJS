//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//'hello world', 'lorem ipsum', 'javascript is cool'
//let str='hello world';
//console.log(str.length);
//let str1='lorem ipsum';
//console.log(str1.length);
//let str2='javascript is cool';
//console.log(str2.length);
//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
//let str='hello world';
//console.log(str.toUpperCase());
//let str1='lorem ipsum';
//console.log(str1.toUpperCase());
//let str2='javascript is cool';
//console.log(str2.toUpperCase());

//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//let str='HELLO WORLD';
//console.log(str.toLowerCase());
//let str1='LOREM IPSUM';
//console.log(str1.toLowerCase());
//let str2='JAVASCRIPT IS COOL';
//console.log(str2.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//let str='   dirty string      ';
//console.log(str.trim());


//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.//['Ревуть', 'воли', 'як', 'ясла', 'повні']

   // let str = 'Ревуть воли як ясла повні';
   // function stringToarray(){
  //  let fi=(" ");
  //  let stringToarray=str.split(fi);
   // console.log(stringToarray);
//}
//stringToarray(str);


//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//let arr=[10,8,-7,55,987,-1011,0,1050,0];
//console.log(arr.map((value) => arr.toString()));
//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//let sortNumb=nums.sort(function (a,b){
   // if (a>b)
   //     return 1;
   // if (a<b)
    //    return -1;
  //  else (a===b)
  //  return 0;
//})
//console.log(sortNumb);
//sortNums(nums,'descending') // [21,11,3]
//let sortNumb=nums.sort(function (a,b){
  //  if (a<b)
  //      return 1;
  //  if (a>b)
  //      return -1;
   // else (a===b)
  //  return 0;
//})
//console.log(sortNumb);


//- є масив
//let coursesAndDurationArray = [
   // {title: 'FullStack', monthDuration: 6},
  //  {title: 'QA Complex', monthDuration: 4},
//    {title: 'JavaScript Complex', monthDuration: 5},
 //   {title: 'Java Complex', monthDuration: 7},
 //   {title: 'Python Complex', monthDuration: 6},
 //   {title: 'Frontend', monthDuration: 4},
 //   {title: 'FullStack', monthDuration: 9}


//];
//-- відсортувати його за спаданням за monthDuration
//let sortOfmonth=coursesAndDurationArray.sort(function (a,b){
 //  if (a.monthDuration<b.monthDuration)
  //      return 1;
  //  if (a.monthDuration>b.monthDuration)
 //       return -1;
 //   if (a.monthDuration===b.monthDuration)
 //   return 0;
//})
//console.log(sortOfmonth);
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//for (let sortOfmonth of coursesAndDurationArray) {
     // sortOfmonth=coursesAndDurationArray.sort(function (a, b)
//{
   //if (a.monthDuration > b.monthDuration )
   //     return 1;
  //  if (a.monthDuration < b.monthDuration )
  //      return -1;
   // if (a.monthDuration === b.monthDuration)
   //     return 0;

//})
//   coursesAndDurationArray.shift();
//}
 //   console.log(coursesAndDurationArray);

//описати колоду карт
//- знайти піковий туз
//- всі шістки
//- всі червоні карти
//- всі буби
//- всі трефи від 9 та більше

let poker = [
        {cardSuit: 'heard', value:'6', color:'red'},
        {cardSuit: 'heard', value:'10', color:'red'},
        {cardSuit: 'heard', value:'queen', color:'red'},
        {cardSuit: 'heard', value:'jack', color:'red'},
        {cardSuit: 'heard', value:'ace', color:'red'},
        {cardSuit: 'spade', value:'9', color:'black'},
         {cardSuit: 'spade', value:'queen', color:'black'},
         {cardSuit: 'spade', value:'jack', color:'black'},
         {cardSuit: 'spade', value:'ace', color:'black'},
         {cardSuit: 'spade', value:'6', color:'black'},
         {cardSuit: 'clubs', value:'10', color:'black'},
         {cardSuit: 'clubs', value:'queen', color:'black'},
         {cardSuit: 'clubs', value:'jack', color:'black'},
         {cardSuit: 'clubs', value:'ace', color:'black'},
        {cardSuit: 'diamond', value:'6', color:'red'},
        {cardSuit: 'diamond', value:'10', color:'red'},
        {cardSuit: 'diamond', value:'queen', color:'red'},
        {cardSuit: 'diamond', value:'ace', color:'red'}
    ];
//- знайти піковий туз
 //let card = poker.find(value => value.cardSuit==='spade'&& value.value==='ace');
 //console.log(card);
//- всі шістки

//let card=poker.filter(value => value.value ==='6');
//console.log(card);

//- всі червоні карти

//let card=poker.filter(value => value.color ==='red');
//console.log(card);

//- всі буби
//let card=poker.filter(value => value.cardSuit ==='diamond');
//console.log(card);

//- всі трефи від 9 та більшe
//let card=poker.filter(value => value.cardSuit ==='clubs'&& value.value!==8);
//console.log(card);



