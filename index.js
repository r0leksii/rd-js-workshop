const userPosts = document.querySelector('.user-posts');

const getAllUserPosts = new API();

async function displayUsers() {
    try {
        const users = await getAllUserPosts.getUsers();

        users.forEach(item => {
            const userPostsItem = document.createElement('div');

            const userName = document.createElement('h3');
            userName.classList.add('font-bold', 'text-2xl');

            const userNameLink = document.createElement('a');
            userNameLink.setAttribute('href', `user.html?id=${item.id}`);
            userNameLink.textContent = item.name;
            userNameLink.classList.add('text-blue-800');

            userPosts.appendChild(userPostsItem);
            userName.appendChild(userNameLink);
            userPostsItem.appendChild(userName);
        });
    }
    catch (error) {
        const errorUsers = document.querySelector('.error-users');

        if (error) {
            errorUsers.classList.remove('hidden');
            errorUsers.classList.add('visible');
        };
    };
};

displayUsers();




