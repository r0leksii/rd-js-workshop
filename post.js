const getUserPost = new API();
const getUserComments = new API();

function getPostIdUrl() {
    const url = new URL(document.location);
    const id = url.searchParams.get('id');
    return id;
};

async function displayPost() {
    const data = await getUserPost.getPosts();
    const postId = getPostIdUrl();
    const post = data.find(item => item.id == postId);

    const userPostTitle = document.querySelector('.h2');
    userPostTitle.textContent = post.title;

    const userPostBody = document.querySelector('.post-body');
    userPostBody.textContent = post.body;
}

async function displayComments() {
    const userComments = document.querySelector('.user-comments');

    try {
        const data = await getUserComments.getComments();
        const postId = getPostIdUrl();
        const comments = data.filter(item => item.post_id == postId);

        comments.forEach(item => {
            const userCommentsItem = document.createElement('div');
            userCommentsItem.classList.add('user-comments-item');

            const userCommentsName = document.createElement('h4');
            userCommentsName.classList.add('user-comments-name');
            userCommentsName.textContent = item.name;
            userCommentsName.classList.add('font-bold', 'text-xl');

            const userCommentsBody = document.createElement('p');
            userCommentsBody.classList.add('user-comments-body');
            userCommentsBody.textContent = item.body;

            userComments.appendChild(userCommentsItem);
            userCommentsItem.appendChild(userCommentsName);
            userCommentsItem.appendChild(userCommentsBody);
        });
    } catch (error) {
        const errorComments = document.querySelector('.error-comments');

        if (error) {
            errorComments.classList.remove('hidden');
            errorComments.classList.add('visible');
        }
    }
}

displayPost();
displayComments();