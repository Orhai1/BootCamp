import {Render} from "./render.js";
import {Tweeter} from "./model.js";

const renderer = new Render();
const tweeter = new Tweeter();

// Render initial posts
renderer.renderPosts(tweeter.getPosts())

//add post
document.getElementById("twit-btn").addEventListener("click", () => {
  const input = document.getElementById("post-input");
  const text = input.value.trim();

  if (!text) return;

  tweeter.addPost(text);
  input.value = "";
  renderer.renderPosts(tweeter.getPosts());
});


document.getElementById("posts").addEventListener("click", (event) => {
    //delete post
    if (event.target.classList.contains("delete")) {
    const postID = event.target.dataset.id;
    tweeter.removePost(postID);
    renderer.renderPosts(tweeter.getPosts());
  }
  // delete comment
    if (event.target.classList.contains("delete-comment")) {
        const commentID = event.target.dataset.id;
        const postID = event.target.closest(".post").dataset.id;

        tweeter.removeComment(postID, commentID);
        renderer.renderPosts(tweeter.getPosts());
    }

    // add comment
    if (event.target.classList.contains("comment-button")) {
        const postEl = event.target.closest(".post");
        const postID = postEl.dataset.id;
        const input = postEl.querySelector(".comment-input");
        const text = input.value.trim();

        if (!text) return;

        tweeter.addComment(postID, text);
        input.value = "";
        renderer.renderPosts(tweeter.getPosts());
    }
});