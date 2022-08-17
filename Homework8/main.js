
//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)

//function User(id, name,surname,email,phone)
//{
  //  this.id=id,
  //  this.name=name
 //   this.surname=surname,
  //  this.email=email,
  //  this.phone=phone
//}
//let i;
//let users=[0];
//for (const usersKey in users)
//{
 // i= i++;
//}
//users.push (new User(4,'hjdgfdh5454454g','sigrgushf','uawgdy@dj',39874893759));
//users.push (new User(2,'hjdgf3g','sgxshf','uawgdy@dj',39484787874893759));
//users.push (new User(1,'h44g','sifdhf','uawggfd@dj',39874455645759));
//users.push (new User(6,'hj55g','jfgfd','udg@kjdsh',9489454548));
//users.push (new User(5,'hjdgdg54g','sigdushf','u55wgdy@dj',3987444893759));
//console.log(users);


//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
 //function doubleUser(item)
 // {
 //       if ((item.id % 2 ) == 0)
 //       {
        //    return true;
  //      }
//}
//console.log (users.filter(doubleUser));

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
 //function sortUser (a,b)
 //{
  //  return a.id-b.id
 //};
//console.log (users.sort(sortUser));


//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client
//class Client
 //{
   //  constructor(id, name, surname , email, phone, order)
   //  {
         //this.id=id,
       //  this.name=name
      //   this.surname=surname,
      //   this.email=email,
      //   this.phone=phone,
     //    this.order=order[0]
    // }
 //}
//let y;
//let users1=[0];
//for (const usersKey in users1)
//{
  //  y= y++;
//}
//users1.push (new Client(4,'hjdgfdh5454454g','sigrgushf','uawgdy@dj',39874893759,[6757]));
//users1.push (new Client(2,'hjdgf3g','sgxshf','uawgdy@dj',39484787874893759,[6575]));
//users1.push (new Client(1,'h44g','sifdhf','uawggfd@dj',39874455645759,[6675]));
//users1.push (new Client(6,'hj55g','jfgfd','udg@kjdsh',9489454548,[1]));
//users1.push (new Client(5,'hjdgdg54g','sigdushf','u55wgdy@dj',3987444893759,[2]));
//console.log(users1);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//function sortUser1 (a,b)
//{
 // return a.order-b.order
//};
//console.log (users1.sort(sortUser1));

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//function Car(model,producer,year,maxSpeed,vv) {
    //    this.model = model,
    //    this.producer = producer,
    //    this.year = year,
      //  this.maxSpeed = maxSpeed,
      //  this.vv = vv,


    //    this.drive = function (msg) {
   //         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    //    }
//
      //  this.info = function (msg1) {
     //   console.log(`Модель - ${model} Виробник - ${producer} Рік випуску - ${year}`)
 //   }

      //  this.newSpeed = function (n) {
     //   console.log(`Нова швидкість ${maxSpeed + n}`)
   // }

     //   this.changeYear = function (k) {
    //    console.log(`Рік випуску ${year + k}`)
  //  }

     //   this.addDriver = function (driver)
//{
      //  this.driver=driver;
//}
//};
//let  carUsers=new Car('kdsfjk','jdkfks',1978,230,6);

//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//carUsers.info();
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//carUsers.newSpeed(200);
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//carUsers.changeYear(123);
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//carUsers.addDriver({name1:'kfsfk',age1:785});
//console.log(carUsers);

//- (Те саме, тільки через клас)
//class Car
//{
 //   constructor(model,producer,year,maxSpeed,vv) {
 //           this.model = model,
   //         this.producer = producer,
   //         this.year = year,
   //         this.maxSpeed = maxSpeed,
  //          this.vv = vv
    //}
   // drive()
//{
  //  console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//}

   // info ()
//{
   // for (let item in this) {
   //     if (typeof this[item]!=='function')
    //    {
     //       console.log(`${item} --- ${this[item]}`)
     //   }
  //  }

//}

   // newSpeed (n)
//{
  //  this.maxSpeed+= n;
//}

      // changeYear (k)
     //  {
    //     this.year+=k;
    //   }


    //   addDriver(driver)
//{
    //   this.driver=driver;
//}
//};
//let  carUsers=new Car('kdsfjk','jdkfks',1978,230,6);
//carUsers.info();
//carUsers.newSpeed(1400);
//carUsers.changeYear(300);
//carUsers.addDriver({name1:'kfsfk',age1:785});
//console.log(carUsers);

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
  //  За допомоги циклу знайти яка попелюшка повинна бути з принцом.
  //  Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinder {
    constructor(name,age,foot) {
        this.name=name,
        this.age=age,
        this.foot=foot
    }
}
    let princes1=new Cinder('olya',34,36);
    let princes2=new Cinder('katya',24,38);
    let princes3=new Cinder('karina',44,39);
    let princes4=new Cinder('olya2',20,36.5);
    let princes5=new Cinder('olena',18,34);
    let princes6=new Cinder('ella',29,44);
    let princes7=new Cinder('inga',17,39);


     class Prince
 {
     constructor(name,age,findFoot)
     {
            this.name=name,
            this.age=age,
            this.findFoot=findFoot
    }
 }
   let prince1=new Prince('kostya',34,44);
   let array=[princes1,princes2,princes3,princes4,princes5,princes6,princes7];

  let fun=(array,prince1)=>
  {
      for (let item of array) {
          if (prince1.findFoot === item.foot)
          {
              return `моя зозулька ${item.name}`;
          }
      }
  }

    console.log(fun(array,prince1));
    console.log(array.find((value, index) => prince1.findFoot===value.foot));






