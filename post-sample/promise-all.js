const posts = [
  {
    title: "Post 1",
    body: "This is Post 1",
  },
  {
    title: "Post 2",
    body: "This is Post 2",
  },
];
function showPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, i) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error!!");
      }
    }, 2000);
  });
}

const p1 = Promise.resolve("hello");
const p2 = 10;
const p3 = new Promise((resolve, reject) => {
  setTimeout(resole, 200, "Goodbye");
});
const p4 = fetch("https://jsonplaceholder.typicode.com/users").them((res) => res.json());

Promise.all([p1, p2, p3, p4]).then((values) => {
  console.log(values);
});
