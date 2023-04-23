const API_USER = 'https://gorest.co.in/public/v2/users';
const API_POST = 'https://gorest.co.in/public/v2/posts';
const API_COMMENT = 'https://gorest.co.in/public/v2/comments';

class API {
  async getUsers() {
    const response = await fetch(API_USER);
    const user = await response.json();
    
    return user;
  };

  async getPosts() {
    const response = await fetch(API_POST);
    const post = await response.json();

    return post;
  };

  async getComments() {
    const response = await fetch(API_COMMENT);
    const comment = await response.json();

    return comment;
  };
};