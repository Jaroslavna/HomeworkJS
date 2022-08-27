//На странице post-details.html:
//7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
//8 Ниже информации про пост, вывести все комментарии текущего поста
//(эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let id = new URLSearchParams(document.location.search).getAll('data');

let div =  document.createElement('div');
div.innerText = `${localStorage.getItem('posts')}`;
document.body.appendChild (div);

let divInfoNext = document.createElement('div');
divInfoNext.classList.add('divInfoNext');
div.appendChild(divInfoNext);

let buttonNext = document.createElement('button');
buttonNext.classList.add('buttonNext')
buttonNext.innerText = 'comment'
div.appendChild(buttonNext);

let divCenter = document.createElement('div');
divCenter.classList.add('divCenter');
document.body.appendChild(divCenter);

buttonNext.onclick = function ()
{
    fetch(` https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response =>
        {
            return response.json()
        })
        .then (comments => comments.forEach( comment =>
            {
                let divPost = document.createElement('div');
                divPost.classList.add('divPost');
                divCenter.appendChild(divPost);
                let p = document.createElement('p');
                p.innerText = `Emai___${comment.email}
                                Coment:${comment.body}`;
                divPost.appendChild(p)

            }

        ))
}