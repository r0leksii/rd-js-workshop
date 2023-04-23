const userPosts = document.querySelector('.user-posts');

const getUserPosts = new API();

function getUserIdUrl() {
    const url = new URL(document.location);
    const id = url.searchParams.get('id');
    return id;
};

async function displayUserPosts() {
    try {
        const post = await getUserPosts.getPosts();

        post.forEach(item => {
            const userPostsItem = document.createElement('div');

            const userPostsTitle = document.createElement('h3');
            userPostsTitle.classList.add('font-bold', 'text-2xl');

            const userPostsTitleLink = document.createElement('a');
            userPostsTitleLink.setAttribute('href', `post.html?id=${item.id}`);
            userPostsTitleLink.textContent = item.title;
            userPostsTitleLink.classList.add('text-blue-800');

            const userPostsBody = document.createElement('p');
            userPostsBody.classList.add('user-posts-body');
            userPostsBody.textContent = item.body;

            userPosts.appendChild(userPostsItem);
            userPostsTitle.appendChild(userPostsTitleLink);
            userPostsItem.appendChild(userPostsTitle);
            userPostsItem.appendChild(userPostsBody);
        });
    } catch (error) {
        const errorPost = document.querySelector('.error-post');

        if (error) {
            errorPost.classList.remove('hidden');
            errorPost.classList.add('visible');
        };
    };
};

displayUserPosts();
