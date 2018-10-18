const db = require("./models");

const post_list = [
  {
    title: "Test",
    category: "Shirts",
    img:
      "https://www.rushordertees.com/design/ZoomImage.php?src=2864256_f&style=g200&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false",
    description: "Test",
    upvotes: 6,
    upvotes_required: 100,
    username: "Test User",
    for_sale: false,
    date: 12 - 12 - 18
  },
  {
    title: "Test2",
    category: "Shirts",
    img:
      "https://www.rushordertees.com/design/ZoomImage.php?src=2864256_f&style=g200&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false",
    description: "Test2",
    upvotes: 6,
    upvotes_required: 100,
    username: "Test2",
    for_sale: false,
    date: 12 - 12 - 18
  },
  {
    title: "Test3",
    category: "Shirts",
    img:
      "https://www.rushordertees.com/design/ZoomImage.php?src=2864256_f&style=g200&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false",
    description: "Test3",
    upvotes: 6,
    upvotes_required: 100,
    username: "Test3",
    for_sale: false,
    date: 12 - 12 - 18
  },
  {
    title: "Test4",
    category: "Shirts",
    img:
      "https://www.rushordertees.com/design/ZoomImage.php?src=2864256_f&style=g200&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false",
    description: "Test4",
    upvotes: 6,
    upvotes_required: 100,
    username: "Test4",
    for_sale: false,
    date: 12 - 12 - 18
  },
  {
    title: "Test5",
    category: "Shirts",
    img:
      "https://www.rushordertees.com/design/ZoomImage.php?src=2864256_f&style=g200&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false",
    description: "Test5",
    upvotes: 6,
    upvotes_required: 100,
    username: "Test5",
    for_sale: false,
    date: 12 - 12 - 18
  }
];

const user_list = [
  {
    username: "Test",
    password: "password",
    profile_pic:
      "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-shadow-fill-circle-512.png",
    email: "test@gmail.com"
  },
  {
    username: "Test1",
    password: "password1",
    profile_pic:
      "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-shadow-fill-circle-512.png",
    email: "Test1@gmail.com"
  },
  {
    username: "Test2",
    password: "password2",
    profile_pic:
      "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-shadow-fill-circle-512.png",
    email: "Test2@gmail.com"
  },
  {
    username: "Test3",
    password: "password3",
    profile_pic:
      "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-shadow-fill-circle-512.png",
    email: "Test3@gmail.com"
  }
];

db.Post.remove({}, (err, removedPosts) => {
  if (err) {
    throw err;
  }
  db.Post.create(post_list, (err, newPost) => {
    if (err) {
      throw err;
    }
  });
});

db.User.remove({}, (err, removedUsers) => {
  if (err) {
    throw err;
  }
  db.User.create(user_list, (err, newUser) => {
    if (err) {
      throw err;
    }
  });
});
