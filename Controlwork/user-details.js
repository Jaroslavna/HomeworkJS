//На странице user-details.html:
//4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
//5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
//(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//  6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
//    которая имеет детальную информацию про текущий пост.
let id = new URLSearchParams(document.location.search).getAll('data');

let div =  document.createElement('div');
div.classList.add('div');
let keys = div.innerText = JSON.parse(localStorage.getItem('users'));


function infoRec(obj)
{
    for ( let key in obj)
    {
        let value=obj[key];
        let li = document.createElement('li');
        li.innerText = `${key} ${value}`;
        div.appendChild(li);
        if (typeof value == "object") {
            infoRec(value);
        }
    }
}
infoRec(keys);

document.body.appendChild (div);

let divInfo = document.createElement('div');
divInfo.classList.add('divInfo');
div.appendChild(divInfo);

let button = document.createElement('button');
button.classList.add('button')
button.innerText = 'post of current user';
divInfo.appendChild(button);

let divCenter = document.createElement('div');
divCenter.classList.add('divCenter');
document.body.appendChild(divCenter);

button.onclick = function ()
{
    fetch(` https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(response =>
    {
        return response.json()
    })
    .then (posts => posts.forEach( post =>

    {      let divPost = document.createElement('div');
            divPost.classList.add('divPost');
            divCenter.appendChild(divPost);

            let divId = document.createElement('div');
            divId.classList.add('divId');
            divPost.appendChild(divId);

            let h3 = document.createElement('h3');
            h3.innerText = `ID___${post.id}
                            TITLE___${post.title}`;
            divId.appendChild(h3);

            let divButton = document.createElement('div');
            divButton.classList.add('divButton');
            divPost.appendChild(divButton);
            let button = document.createElement('button');
            button.classList.add('buttonInfo');
            button.innerText = 'information';
            divButton.appendChild(button);

            button.onclick = function ()
            {
                localStorage.setItem("posts", JSON.stringify(post));
                window.open(`post-details.html?data=${post.id}`);
            }
    }
    ))
}

