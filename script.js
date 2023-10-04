const users = document.getElementById('users');

getUsers();

async function fetchAndAddUser(userCount) {
    const userArray = await fetch(`https://randomuser.me/api?results=${userCount}`)
        .then(res => res.json())
        .then(data => data.results);
    // Style and add to DOM
    users.innerHTML = '';

    userArray.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';

        const userImg = document.createElement('img');
        userImg.src = user.picture.thumbnail;
        userDiv.appendChild(userImg);

        const userInfo = userDiv.appendChild(document.createElement('div'));
        userInfo.className = 'info'
        const name = document.createElement('h3');
        name.textContent =  `${user.name.first} ${user.name.last}`;
        const location = document.createElement('p');
        location.innerText = `${user.location.city}, ${user.location.country}`;
        userInfo.appendChild(name);
        userInfo.appendChild(location);

        users.appendChild(userDiv);
    });
    
}

function getUsers() {
    // for (let i=0; i<30; i++)
    //     fetchAndAddUser();
    fetchAndAddUser(30);
}

const filter = document.querySelector('input');

filter.addEventListener('keyup', (e) => filterUsers(e.target.value.toLowerCase()));

function filterUsers(value) {
    // const result = Array.from(users.childNodes).filter(user => user.textContent.indexOf(value) != -1 )
    // users.innerHTML = result;
    // users.childNodes.
    users.childNodes.forEach( user => { 
        if (user.innerText.toLowerCase().indexOf(value) != -1)
            user.style.display = 'flex';
        else
            user.style.display = 'none';
    })
}