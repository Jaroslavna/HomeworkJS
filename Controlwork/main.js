//В index.html
//1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
//2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
//3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули
//let divFather =  document.createElement('div');
//document.body.appendChild(div);


fetch(`https://jsonplaceholder.typicode.com/users`)
  .then(response =>
  {
      return response.json()
  })
    .then (users => users.forEach(user =>
        {
        let div = document.createElement('div');
        div.classList.add('divUser');
        div.innerText = `ID ____________${user.id} 
                         NAME________${user.name}`;
        document.body.appendChild(div);

        let buttonElement = document.createElement('button');
        buttonElement.classList.add('buttonElement');
        buttonElement.innerText = 'details';
        div.appendChild(buttonElement);

        buttonElement.onclick = function ()
            {
                localStorage.setItem("users", JSON.stringify(user));
                window.open(`user-details.html?data=${user.id}`);
            }

    }
    ))






