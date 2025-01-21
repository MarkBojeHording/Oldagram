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
  const nameElement = document.getElementById("name");
  const cityElement = document.getElementById("city");
  const avatarElement = document.getElementById("avatar");
  const postElement = document.getElementById("post");
  const commentElement = document.getElementById("comment");
  const likesElement = document.getElementById("likes");

  if (nameElement) nameElement.textContent = posts[0].name;
  if (cityElement) cityElement.textContent = posts[0].location;
  if (avatarElement) avatarElement.src = posts[0].avatar;
  if (postElement) postElement.src = posts[0].post;
  if (likesElement) likesElement.textContent = `${posts[0].likes} likes`;

  if (commentElement) {
      commentElement.innerHTML = `<strong>${posts[0].username}</strong> <span class="mushroom">${posts[0].comment}</span>`;
  }
});
