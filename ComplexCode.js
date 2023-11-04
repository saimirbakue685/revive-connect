/*
Filename: ComplexCode.js
Description: This code demonstrates a complex implementation of a social media network.
*/

// User class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.friends = [];
    this.posts = [];
  }

  addFriend(user) {
    if (!this.friends.includes(user)) {
        this.friends.push(user);
        user.friends.push(this);
    }
  }

  createPost(content) {
    const post = new Post(content);
    this.posts.push(post);
  }

  likePost(post) {
    if (this.posts.includes(post) && !post.likes.includes(this)) {
        post.likes.push(this);
    }
  }
}

// Post class
class Post {
  constructor(content) {
    this.content = content;
    this.likes = [];
  }

  addComment(user, comment) {
    const newComment = new Comment(user, comment);
    this.comments.push(newComment);
  }
}

// Comment class
class Comment {
  constructor(user, comment) {
    this.user = user;
    this.comment = comment;
  }
}

// Creating Users
const john = new User("John", 25);
const emma = new User("Emma", 28);
const david = new User("David", 30);

// Establishing friendships
john.addFriend(emma);
emma.addFriend(david);

// Creating and liking posts
john.createPost("Hello, everyone!");
john.likePost(john.posts[0]);
emma.createPost("I'm having a great day!");
david.likePost(emma.posts[0]);

// Displaying user interactions
console.log("John's friends:", john.friends.map(friend => friend.name));
console.log("Emma's posts:", emma.posts.map(post => post.content));
console.log("David's likes:", david.posts.map(post => post.likes.length));

/*
Expected Output:

John's friends: [ 'Emma' ]
Emma's posts: [ 'I\'m having a great day!' ]
David's likes: [ 1 ]
*/