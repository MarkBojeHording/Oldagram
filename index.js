const posts = [
  {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21
  },
  {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4
  },
  {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      post: "images/post-ducreux.jpg",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152
  }
];

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("name").textContent = posts[0].name;
  document.getElementById("city").textContent = posts[0].location;
  document.getElementById("avatar").src = posts[0].avatar;
  document.getElementById("post").src = posts[0].post;
  document.getElementById("likes").textContent = `${posts[0].likes} likes`;
  document.getElementById("comment").innerHTML = `<strong>${posts[0].username}</strong> <span class="mushroom">${posts[0].comment}</span>`;

  const main = document.querySelector("main");

  for (let i = 1; i < posts.length; i++) {
    let post = posts[i];

    const postHTML =
    ` <div class="main-container">
          <img class="main-logo" src="${post.avatar}" alt="Profile Picture">
          <div class="text-container">
              <h1 class="name">${post.name}</h1>
              <h2 class="city">${post.location}</h2>
          </div>
      </div>

      <div>
          <img class="main-pic" src="${post.post}" alt="Post Image">
      </div>

      <div class="bottom-container">
          <div class="images-container">
              <img class="image" src="images/icon-heart.png" alt="A heart symbol">
              <img class="image" src="images/icon-comment.png" alt="A comment symbol">
              <img class="image" src="images/icon-dm.png" alt="A dm symbol">
          </div>

          <div class="last-container">
              <p class="likes">${post.likes} likes</p>
              <p class="comment"><strong>${post.username}</strong> <span class="mushroom">${post.comment}</span></p>
          </div>
      </div>
      <hr> `;

    main.innerHTML += postHTML;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const post = document.getElementById("post");

  if (post) {
      post.addEventListener("dblclick", function () {
          console.log("Post was double-clicked!");
      });
  } else {
      console.error("Element with id 'post' not found!");
  }
});
